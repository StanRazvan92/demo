  @nightly
  Feature: Hotel Search

  Background: 
    Given I am on the Google Travel Hotel Search page

  Scenario: Search for hotels by city name
    When I enter "Paris" as the destination
    And I select "Capital of France" as the destination
    Then I should be able to see hotels from 'Paris'
    
  # Scenario: Search for hotels by landmark
  #   When I enter "Eiffel Tower" as the destination
  #   And I select check-in date "2023-12-01" and check-out date "2023-12-07"
  #   And I specify 2 adults and 1 room
  #   Then I should see a list of available hotels near Eiffel Tower

  # # Filters Application
  # Scenario: Apply star rating and price filter
  #   When I enter "New York" as the destination
  #   And I should be able to change check-in to "Sat, Apr 19"
  #   And I should be able to change check-out to "Sat, Apr 26"
  #   And I specify 2 adults and 1 room
  #   And I apply a filter with a star rating of 4 and a price range "$100-$200"
  #   Then I should see hotels with 4 stars within the $100-$200 price range

  # Scenario: Apply multiple amenities filters
  #   When I enter "Tokyo" as the destination
  #   And I select check-in date "2023-12-10" and check-out date "2023-12-15"
  #   And I specify 1 adult and 1 room
  #   And I apply filter for amenities "Free WiFi", "Breakfast included", and "Pool"
  #   Then I should see hotels offering Free WiFi, Breakfast included, and having a Pool

  # Scenario: Apply free cancellation option
  #   When I enter "Sydney" as the destination
  #   And I select check-in date "2023-12-05" and check-out date "2023-12-12"
  #   And I specify 1 adult and 1 room
  #   And I apply the free cancellation filter
  #   Then I should see hotels offering free cancellation

  # Scenario: Apply property type filter
  #   When I enter "Amsterdam" as the destination
  #   And I select check-in date "2023-12-01" and check-out date "2023-12-07"
  #   And I specify 2 adults and 1 room
  #   And I apply the property type filter for "Apartment"
  #   Then I should see a list of available apartments

  # # Negative Test Cases
  # Scenario: Invalid date format input
  #   When I enter "Barcelona" as the destination
  #   And I input an invalid check-in date "20-32-2023" and check-out date "01-12-2023"
  #   Then I should see a validation error message for the date format