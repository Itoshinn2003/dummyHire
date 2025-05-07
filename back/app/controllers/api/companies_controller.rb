class Api::CompaniesController < ApplicationController

    def signin
        company = Company.find_by(mail: params[:mail], password: params[:password])
        unless company.nil?
            render json: {id: company.id}, status: :ok
        else
            if Company.find_by(mail: params[:mail]).nil?
                render json: { error: "企業が見つかりません" }, status: :unprocessable_entity
            else 
                render json: { error: "メールかパスワードが間違っています"}, status: :unprocessable_entity
            end
        end
    end
end
