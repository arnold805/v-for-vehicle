Feature: This is a sample feature

    Scenario: New user searches vehicles
        Given The following cars exist in the system:
            | make | model |
            | BMW  | 330i  |
        And I have landed on the site
        When I search for BMW's in the search box
        Then I should see a BMW 330i at the top of the search list
