class SessionsController < ApiController

    before_action :authorize_user, except: [:login]

    def login
        user = User.find_by(email: params[:email])
        # byebug
        if user&.authenticate(params[:password])

            # Group Activity => 
            # - Set Session's 'current_user' to User's ID

            # session[:current_user] => nil
            session[:current_user] = user.id

            # - Set Session's 'login_attempts' to 0

            # session[:login_attempts] => nil
            session[:login_attempts] = 0
            
            render json: user, status: :ok
        else

            # Group Activity =>
            
            # - Set Session's 'login_attempts' to 0 if Undefined / Falsey
            session[:login_attempts] ||= 0

            # - Increment Session's 'login_attempts' by 1
            # session[:login_attempts] = session[:login_attempts] + 1
            session[:login_attempts] += 1

            render json: { error: "Invalid Email and/or Password" },  status: :unauthorized
        end
    end 

    def logout
        session.delete :current_user
    end 
  end