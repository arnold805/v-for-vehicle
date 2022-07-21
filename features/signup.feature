Feature: Plays out signup

    Scenario: New user makes a new account
        Given I have landed on the site
        When I click on Login button
        Then I should see a Sign in form
        When I click on Sign Up
        Then I should see a Sign Up form
        When I sign up as Jeremy Clarkson with jclarkson@gmail.com and Hammond!!!
        Then I should see logout button
