class Api::LikesController < ApplicationController

    def change_liked
        like = Like.find_by(intern_id: params[:intern_id], student_id: params[:student_id])
        if like.nil?
            Like.create(intern_id: params[:intern_id], student_id: params[:student_id])
            render json: { is_liked: true }
        else
            like.destroy
            render json: {is_liked: false }
        end
    end
end
