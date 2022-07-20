When('I search for BMW\'s in the search box') do
    fill_in "Search", with: "BMW"
end
Then('I should see a BMW 330i at the top of the search list') do
    expect(page).to have_content("BMW 330i")
end