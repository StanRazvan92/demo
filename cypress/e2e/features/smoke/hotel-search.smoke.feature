  @smoke
  Feature: Hotel Search

  Background: 
    Given I am on the Google Travel Hotel Search page

  Scenario: Should have required components loaded 
    Then I should see all components loaded

  Scenario: Should have search component functional
    When I enter "Paris" as the destination
    And I select "Capital of France" as the destination
    Then I should be able to see hotels from 'Paris'

  Scenario: Should have check-in component functional
    Then I should be able to change check-in to "Sat, Apr 19"

  Scenario: Should have check-out  component functional
    Then I should be able to change check-out to "Sat, Apr 5"

  Scenario: Should have requried component functional
    When I select first hotel from result list
    Then I should see details about that hotel