class FavoriteVehicle < ApplicationRecord
    validate  :validate_vehicle_id_user_id
    belongs_to :vehicle
    belongs_to :user

    def validate_vehicle_id_user_id
        # debugger
        if FavoriteVehicle.where(vehicle_id: vehicle.id, user_id: user.id).any?
            self.errors.add(:base, "This vehicle is already on favorites list")
        end
    end

end
