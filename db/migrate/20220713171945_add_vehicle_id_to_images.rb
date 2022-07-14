class AddVehicleIdToImages < ActiveRecord::Migration[7.0]
  def change
    add_column :images, :vehicle_id, :integer
  end
end
