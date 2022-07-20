class Vehicle < ApplicationRecord

    REQUIRED_FIELDS = self.column_names.map(&:to_sym) - IMPLICIT_FIELDS

    has_many :users, through: :favorite_vehicles
    has_many :images

    #    * dereference operator, unpacks fields and passes them in as parameters
    validates *REQUIRED_FIELDS, presence: true
end
