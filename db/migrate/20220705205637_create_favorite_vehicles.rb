class CreateFavoriteVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_vehicles do |t|
      t.string :user_id
      t.string :vehicle_id

      t.timestamps
    end
  end
end
