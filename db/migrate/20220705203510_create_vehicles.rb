class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.integer :year
      t.string :make
      t.string :model
      t.string :condition
      t.integer :price
      t.integer :odometer
      t.string :engine_type
      t.integer :engine_displacement
      t.integer :cylinder_count
      t.integer :power
      t.integer :torque
      t.string :transmission
      t.string :body_style
      t.string :drive_type
      t.string :interior_color
      t.string :exterior_color
      t.integer :zipcode

      t.timestamps
    end
  end
end
