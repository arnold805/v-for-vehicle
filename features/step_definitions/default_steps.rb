Given('I have landed on the site') do
    visit "/"
end
When('I click on Login button') do
    click_on 'login'
end
Then('I should see a Sign in form') do
    expect(page).to have_content('Sign in')
end

When('I click on Sign Up') do
    click_on 'signup'
end
Then('I should see a Sign Up form') do
    expect(page).to have_content('Sign Up')
end
When('I sign up as {word} {word} with {word} and {word}') do |first_name, last_name, email, password|
    fill_in 'firstName', :with => first_name
    fill_in 'lastName', :with => last_name
    fill_in 'email', :with => email
    fill_in 'password', :with => password
    click_on 'signupformsubmit'
end
Then('I should see logout button') do
    expect(page).to have_content('LOGOUT')
end

When('I click on forgot password') do
    click_on 'Forgot password?'
end
Then('I should see password recovery form') do
    expect(page).to have_content('Password Recovery')
end
When('I submit {word} to password reset') do |email|
    fill_in 'email', :with => email
    click_on 'Send Password Reset Email'
end
Then('I should see recovery email sent') do
    expect(page).to have_content('recovery email sent')
end