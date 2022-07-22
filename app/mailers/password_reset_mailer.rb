class PasswordResetMailer < ApplicationMailer
    include ActionView::Helpers::UrlHelper

    default from: 'noreply@v-for-vehicle.com'

    def password_reset_email
        @user = params[:user]
        @url = reset_password_url(token: @user.password_reset_token)
        mail(to: @user.email, subject: 'Your password was reset')
    end
end
