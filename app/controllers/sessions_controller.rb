class SessionsController < ApplicationController
    # login
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user
        else
            render jsonL { errors: ["Invalid username or passowrd"] }, status: :unauthroized
        end
    end

    # logout
    def destroy 
        session.delete :user_id
        head :no_content
    end
end
