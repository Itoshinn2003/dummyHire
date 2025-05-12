class Api::StudentsController < ApplicationController
    include ActionController::Cookies
    def create
        @student = Student.new(user_name: params[:userName], university_name: params[:universityName], department: params[:department], password: params[:password], grade: params[:grade], desired_job: params[:desiredJob], user_id: params[:userId])
        if @student.save
            render json: { message: "success" }, status: :created
        else 
            render json: { error: @student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def signin
        student = Student.find_by(user_id: params[:userId], password: params[:password])
        unless student.nil?
            cookies[:student_id] = { value: student.id, httponly: true, same_site: :none, expires: 1.week.from_now }
            render json: {id: student.id}, status: :ok
        else
            if Student.find_by(user_id: params[:userId]).nil?
                render json: { error: "ユーザーが見つかりません" }, status: :unprocessable_entity
            else 
                render json: { error: "ユーザーIDかパスワードが間違っています"}, status: :unprocessable_entity
            end
        end
    end

    def update
        student = Student.find(params[:id])
        if student.update(id: params[:id], user_name: params[:userName], university_name: params[:universityName], department: params[:department], profile_text: params[:profileText], self_pr: params[:selfPR], grade: params[:grade], region: params[:region], desired_job: params[:desiredJob], github: params[:github], portfolio: params[:portfolio])
            render json: { student: student.as_json }, status: :ok
          else
            render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def profile 
        student = Student.find(params[:id])
        student = student.as_json(only: [:user_name, :university_name, :department, :profile_text, :self_pr, :grade, :region, :desired_job, :github, :portfolio])
        render json: { student: student}
    end
end
