require 'rails_helper'

RSpec.describe FavoriteVehicle, type: :model do
  context 'validations' do
    let(:user) { create(:user) }
    let(:vehicle) { create(:vehicle) }
    let(:favorite_vehicle) { build(:favorite_vehicle, user: user, vehicle: vehicle) }

    context 'no other favorites are present' do
      it 'is valid' do
        expect(user.valid?).to eq(true)
      end
    end

    context 'another favorite is already present' do
      before :each do
        create(:favorite_vehicle, user: user, vehicle: vehicle)
      end

      it 'is invalid' do
        # debugger
        expect(favorite_vehicle.valid?).to eq(false)
        expect(favorite_vehicle.errors.full_messages).to include("This vehicle is already on favorites list")
      end
    end
  end
end