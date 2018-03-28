class TagsController < ApplicationController
    before_action :set_tag, only: [:show, :delete]
    
    def index
        @tags = Tag.all
        render json: @tags
    end

    def show
        render json: @tag
    end

    def destroy
        @tag.delete
    end

    private

    def set_tag
        @tag = Tag.find_by(id: params[:id])
    end
end
