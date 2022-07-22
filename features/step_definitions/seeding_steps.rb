Given('The following cars exist in the system:') do |table|
    table.rows.each do |make, model|
        FactoryBot.create(:vehicle, make: make, model: model)
    end
end
Given('{word} {word} is already registered with {word} and {word}') do |first_name, last_name, email, password|
        FactoryBot.create(:user, first_name: first_name, last_name: last_name, email: email, password: password)
end
