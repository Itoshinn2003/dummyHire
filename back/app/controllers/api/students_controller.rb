class Api::StudentsController < ApplicationController
    def create

        @student = Student.new(user_name: params[:userName], university_name: params[:universityName], department: params[:department], password: params[:password], grade: params[:grade], desired_job: params[:desiredJob], user_id: params[:userId])
        p @student
        if @student.save
            render json: { message: "success" }, status: :created
        else 
            p @student.errors.full_messages
            render json: { error: @student.errors.full_messages }, status: :unprocessable_entity
        end
    end
end
