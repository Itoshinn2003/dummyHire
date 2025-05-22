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
            receiver_name = Student.find(params[:student_id]).user_name
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

    def list 
        if  params[:type] == "Company"
            students1 = Message.where(receiver_type: 'Company', receiver_id: params[:company_id]).pluck(:sender_id)
            students2 = Message.where(sender_type: 'Company', sender_id: params[:company_id]).pluck(:receiver_id)

            students_id = (students1 + students2).uniq
            students = Student.where(id: students_id)
            students = students.as_json(only: [:id, :user_name])
            render json: { students: students }
        else
            companies1 = Message.where(receiver_type: 'Student', receiver_id: params[:student_id]).pluck(:sender_id)
            companies2 = Message.where(sender_type: 'Student', sender_id: params[:student_id]).pluck(:receiver_id)

            companies_id = (companies1 + companies2).uniq
            companies = Company.where(id: companies_id)
            companies = companies.as_json(only: [:id, :name])
            render json: { companies: companies }

        end
    end
end
