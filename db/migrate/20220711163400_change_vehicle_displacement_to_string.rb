class ChangeVehicleDisplacementToString < ActiveRecord::Migration[7.0]
  def change
    change_column :vehicles, :engine_displacement, :string
  end
end
