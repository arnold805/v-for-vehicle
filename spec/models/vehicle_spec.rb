require 'rails_helper'

RSpec.describe Vehicle, type: :model do
  context 'validations' do

    let(:vehicle) { build(:vehicle) }


    context 'validations' do
      context 'has all necessary fields' do
        it 'is valid' do
          expect(vehicle.valid?).to eq(true)
        end
      end

      # grabs REQUIRED_FIELDS array of parameters from models/vehicle.rb
      Vehicle::REQUIRED_FIELDS.each do |field_name|

      context "is missing the field #{field_name}" do
        before do
          # year=     Ruby's version of setter method
          vehicle.send("#{field_name}=", nil)
        end
        
        it 'is invalid' do
          expect(vehicle.valid?).to eq(false)
          expect(vehicle.errors.full_messages).to include("#{field_name.to_s.capitalize.sub('_',' ')} can't be blank")
        end
      end
      end
    end
  end
end
