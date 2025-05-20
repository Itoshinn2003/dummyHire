class Api::MessagesController < ApplicationController

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
        render json: {messages: messages, receiver_name: receiver_name}
    end
end
