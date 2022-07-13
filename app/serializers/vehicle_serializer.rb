class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :condition, :price, :odometer, :engine_type, :engine_displacement, :cylinder_count, :power, :torque, :transmission, :body_style, :drive_type, :interior_color, :exterior_color, :zipcode

  has_many :images
end
