class Vehicle < ApplicationRecord
    has_many :users, through: :favorite_vehicles
end
