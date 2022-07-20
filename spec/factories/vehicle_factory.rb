FactoryBot.define do
    factory :vehicle do
        year { 2022 }
        make { 'Honda' }
        model { 'Civic' }
        condition { 'new' }
        price { 22500 }
        odometer { 0 }
        engine_type { 'gas' }
        engine_displacement { '2.0' }
        cylinder_count { 4 }
        power { 158 }
        torque { 138 }
        transmission { 'manual' }
        body_style { 'hatchback' }
        drive_type { 'FWD' }
        interior_color { 'black' }
        exterior_color { 'blue' }
        zipcode { 43210 }
    end
end