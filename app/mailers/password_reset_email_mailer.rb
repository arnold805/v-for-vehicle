class PasswordResetEmailMailer < ApplicationMailer
    default from: 'noreply@v-for-vehicle.com'

    def password_reset_email
        @user = params[:user]
        @url = 'http://vforvehicle.com/forgotpassword'
        mail(to: @user.email, subject: 'Your password was reset')
    end
end
