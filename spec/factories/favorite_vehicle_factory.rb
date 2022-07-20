FactoryBot.define do
    factory :favorite_vehicle do
        association :user
        association :vehicle
    end
end