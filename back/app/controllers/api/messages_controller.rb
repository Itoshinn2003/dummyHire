class Api::MessagesController < ApplicationController

    def create
        if (params[:type] == 'Company')
            message = Message.new(content: params[:content], sender_id: params[:company_id], receiver_id: params[:student_id], sender_type: 'Company', receiver_type: 'Student')
        elsif (params[:type] == 'Student')
            message = Message.new(content: params[:content], sender_id: params[:student_id], receiver_id: params[:company_id], sender_type: 'Student', receiver_type: 'Company')
        end


        if message.save
            render json: { message: "success" }, status: :created
        else 
            render json: { error: message.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def chatroom
        if params[:type] == "Company"
            messages = Message.where(
            "(sender_type = ? AND sender_id = ? AND receiver_id = ?) OR (receiver_type = ? AND receiver_id = ? AND sender_id = ?)",
            params[:type], params[:company_id], params[:student_id], params[:type], params[:company_id], params[:student_id]
            ).order(:created_at)
            receiver__name = Student.find(params[:student_id]).user_name
        else
            messages = Message.where(
            "(sender_type = ? AND sender_id = ? AND receiver_id = ?) OR (receiver_type = ? AND receiver_id = ? AND sender_id = ?)",
            params[:type], params[:student_id], params[:company_id], params[:type], params[:student_id], params[:company_id]
        ).order(:created_at)
            receiver_name = Company.find(params[:company_id]).name
        end

        messages = messages.as_json(
            only: [:content, :sender_type ,:created_at]
        )
        render json: {messages: messages, receiver_name: receiver_name}
    end
end
