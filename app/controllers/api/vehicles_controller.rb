class Api::VehiclesController < ApiController

    def index
        if params[:favorites]
            vehicles = current_user.vehicles
        else 
            vehicles = Vehicle.all
        end
        
        render json: vehicles
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
        render json: @vehicle
    end

    def favorite
        vehicle = find_vehicle
        user = current_user
        favorite = FavoriteVehicle.create(vehicle: vehicle, user: user)
        render json: favorite
    end

    private

    def find_vehicle
        Vehicle.find(params[:id])
    end

    def vehicle_params
        params.permit(:year, :make, :model, :condition, :price, :odometer, :engine_type, :engine_displacement, :cylinder_count, :power, :torque, :transmission, :body_style, :drive_type, :interior_color, :exterior_color, :img_url, :zipcode)
    end
end