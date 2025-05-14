class Api::InternsController < ApplicationController

    def create
        intern = Intern.new(company_id: params[:companyId], title: params[:title], job: params[:job], intern_text: params[:internText], terms: params[:terms], selection: params[:selection], salary: params[:salary], location: params[:location])
        if intern.save
            render json: { message: "success" }, status: :created
        else 
            render json: { error: intern.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show

        intern = Intern.find(params[:id])
        intern = intern.as_json(only: [:title, :job, :intern_text, :terms, :selection, :salary, :location, :compamy_id])
        render json: {intern: intern}, status: :ok
    end


    def destroy
        intern = Intern.find(params[:id])
        intern.destroy
    end
end
