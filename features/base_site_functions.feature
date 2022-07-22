Feature: Plays out the core site features

    Background:
        Given James May is already registered with captslow@gmail.com and backToTheStudio!
        And I have landed on the site
        When I click on Login button
        Then I should see a Sign in form
        When I fill in email and password and click sign in
        Then I should see logout button

    Scenario: New user searches vehicles
        Given The following cars exist in the system:
            | make | model |
            | BMW  | 330i  |
        And I have landed on the site
        When I search for BMW's in the search box
        Then I should see a BMW 330i at the top of the search list
