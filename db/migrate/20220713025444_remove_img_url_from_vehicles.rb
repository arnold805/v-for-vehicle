class RemoveImgUrlFromVehicles < ActiveRecord::Migration[7.0]
  def change
    remove_column :vehicles, :img_url
  end
end
