class User < ApplicationRecord
    include BCrypt
    has_many :favorite_vehicles
    has_many :vehicles, through: :favorite_vehicles

    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails
    validates :first_name, :last_name, presence: true

    def authenticate(password)
        self.password == password
    end

    def password
    @password ||= Password.new(password_digest)
    end
    
    def password=(new_password)
    @password = Password.create(new_password)
    self.password_digest = @password
    end

    def generate_password_reset_token!
        self.password_reset_token = SecureRandom.uuid
        self.password_reset_token_expiration = Time.now + 5.minutes
        save!
        # user_email = User.find_by_email(user)
        PasswordResetMailer.with(user: self).password_reset_email.deliver_now
    end

    def password_reset_token_valid?
        (self.password_reset_token_expiration + 5.minutes) > Time.now
    end

    def reset_password!(password)
        self.reset_password_token = nil
        self.password_reset_token = nil
        self.password_reset_token_expiration = nil
        self.password = password
        save!
    end

    def name
        first_name
    end

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "That email is not permitted")
        end
    end
end
