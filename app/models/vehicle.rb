class Vehicle < ApplicationRecord
    has_many :users, through: :favorite_vehicles
    has_many :images
end
