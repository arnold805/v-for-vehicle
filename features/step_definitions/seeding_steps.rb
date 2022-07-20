Given('The following cars exist in the system:') do |table|
    table.rows.each do |make, model|
        FactoryBot.create(:vehicle, make: make, model: model)
    end
end