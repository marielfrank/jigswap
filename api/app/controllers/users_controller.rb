class UsersController < ApplicationController
    before_action :authenticate_user
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user
    end

    def create
        user = User.new(user_params)
        if user.valid? && user.save
            token = Knock::AuthToken.new(payload: { sub: user.id })
            render json: token, status: 200
        else
            render json: {errors: "We're having issues creating your account..."}
        end
    end

    def update
        if @user.update(user_params)
            token = Knock::AuthToken.new(payload: { sub: user.id })
            render json: token, status: 200
        else
            raise "Add error handling here!".inspect
        end
    end

    def destroy
        @user.delete
    end

    private

    def set_user
        @user = User.find_by(id: params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :admin, :location_id)
    end
end
