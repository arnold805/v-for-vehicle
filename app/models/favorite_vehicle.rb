class FavoriteVehicle < ApplicationRecord
    validate  :validate_vehicle_id_user_id
    belongs_to :vehicle
    belongs_to :user

    def validate_vehicle_id_user_id
        if FavoriteVehicle.find_by(vehicle_id: user.id, user_id: vehicle.id)
            errors.add(:base, "This vehicle is already on favorites list")
        end
    end

end
