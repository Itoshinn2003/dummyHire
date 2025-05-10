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

    def profile 
        student = Student.find(params[:id])
        p 'Ahfhdkjghkdghksdh'
        p student
        p student.as_json
        render json: { student: student.as_json}
    end
end
