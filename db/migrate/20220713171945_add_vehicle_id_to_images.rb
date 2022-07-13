class AddVehicleIdToImages < ActiveRecord::Migration[7.0]
  def change
    add_reference :images, :vehicle, null: false, foreign_key: true
  end
end
