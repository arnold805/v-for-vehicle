Feature: Plays out forgotten password

    Scenario: User forgets password
        Given I have landed on the site
        When I click on Login button
        Then I should see a Sign in form
        When I click on forgot password
        Then I should see password recovery form
        When I submit jclarkson@gmail.com to password reset
        Then I should see recovery email sent
        And I should recieve the email
