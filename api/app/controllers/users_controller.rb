class UsersController < ApplicationController
    # before_action :authenticate_user
    # skip_before_action :authenticate_user, only: [:create]
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        @users = User.all
        render json: @users, include: :puzzles
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)
        if @user.valid? && @user.save
            render json: @user, status: 200
        else
            render json: {errors: "We're having issues creating your account..."}
        end
    end

    def update
        if @user.update(user_params)
            render json: user, status: 200
        else
            raise "Add error handling here!".inspect
        end
    end

    def destroy
        @user.delete
    end

    def find
        @user = User.find_by(email: params[:user][:email])
        if @user
          render json:@user
        else
          @errors = @user.errors.full_messages
          render json:@errors
        end
    end

    private

    def set_user
        @user = User.find_by(id: params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :admin)
    end
end
