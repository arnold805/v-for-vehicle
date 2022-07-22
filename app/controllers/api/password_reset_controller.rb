class Api::PasswordResetController < ApiController
    def create
        user = User.find_by(params[:email])
        user.generate_password_reset_token!
        render json: {status: 'ok'}, status: :ok
    end

end