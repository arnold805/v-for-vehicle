class Api::VehiclesController < ApiController

    def index
        render json: Vehicle.all
    end

    def show
        vehicle = find_vehicle
        render json: vehicle
    end

    def create
        @vehicle = Vehicle.new(vehicle_params)
        @vehicle.save!
        render json: @vehicle, status: :created
    end

    def destroy
        vehicle = find_vehicle
        vehicle.destroy
        head :no_content
    end

    def latest_vehicle
        @vehicle = Vehicle.last
        render json: @recipe
    end

    private

    def find_vehicle
        Vehicle.find(params[:id])
    end

    def vehicle_params
        params.permit(:year, :make, :model, :condition, :price, :odometer, :engine_type, :engine_displacement, :cylinder_count, :power, :torque, :transmission, :body_style, :drive_type, :interior_color, :exterior_color, :zipcode)
    end
end