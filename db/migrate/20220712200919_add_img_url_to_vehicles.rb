class AddImgUrlToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :img_url, :string
  end
end
