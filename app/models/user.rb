class User < ApplicationRecord
    include BCrypt

    has_many :vehicles, through: :favorite_vehicles

    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

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

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "I'm sorry that email is not permitted.")
        end
    end 
end
