class Api::CompaniesController < ApplicationController

    def show 
        company = Company.includes(:interns).find(params[:id])
        company = company.as_json(only: [:name, :mail, :profile_text, :location, :established, :employee, :official_site],
            include: {
                interns: {
                   only: [:id, :title, :salary, :location, :job]
            }})
        render json: {company: company}, status: :ok
    end
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

    def profile 
        company = Company.includes(:interns).find(params[:id])
        company = company.as_json(only: [:name, :mail, :profile_text, :location, :established, :employee, :official_site],
        include: {
            interns: {
              only: [:id, :title, :salary, :location, :job]
            }})
        render json: { company: company}
    end

    def update
        company = Company.find(params[:id])
        if company.update(id: params[:id], name: params[:name], mail: params[:mail], location: params[:location], profile_text: params[:profileText], established: params[:established], employee: params[:employee], official_site: params[:officialSite])
            render json: { company: company.as_json }, status: :ok
          else
            render json: { errors: company.errors.full_messages }, status: :unprocessable_entity
        end
    end
end