class ApplicationController < ActionController::API
    private

    def logged_in?
        !!current_user
    end

    def current_user
        User.find_by(id: session[:user_id])
    end

    def log_user_in
        session[:user_id] = @user.id
        # do something?
    end

end
