class User < ApplicationRecord
    has_many :vehicles, through: :favorite_vehicles
end
