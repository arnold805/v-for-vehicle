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

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "That email is not permitted")
        end
    end 
end
