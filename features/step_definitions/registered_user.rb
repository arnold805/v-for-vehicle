When('I fill in email and password and click sign in') do
    fill_in 'email', :with => 'captslow@gmail.com'
    fill_in 'password', :with => 'backToTheStudio!'
    click_on 'Sign In'
end