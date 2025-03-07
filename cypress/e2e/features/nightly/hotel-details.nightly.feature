@nightly
Feature: Hotel Details

  Background:
    Given I have selected a hotel from the search results on Google Travel

  # Viewing Detailed Information
  Scenario: View hotel photos and descriptions
    Then I should see a gallery of multiple photos of the hotel
    And I should see a detailed description of the hotel

  # Scenario: Verify amenities listed
  #   When I view the hotel details page
  #   Then I should see a list of amenities offered by the hotel

  # # Checking Availability and Pricing
  # Scenario: Verify room availability and pricing
  #   When I check the room options on the hotel details page
  #   Then I should see accurate availability status for each room type
  #   And I should see the correct pricing for each available room

  # Scenario: Verify room type descriptions
  #   When I view the room options
  #   Then I should see detailed descriptions for each room type

  # # User Reviews and Ratings
  # Scenario: Read user reviews
  #   When I scroll to the reviews section on the hotel details page
  #   Then I should see a list of user reviews for the hotel

  # Scenario: View average review scores
  #   When I view the reviews section
  #   Then I should see the average review score displayed prominently

  # # Negative Test Cases
  # Scenario: No photos available for the hotel
  #   Given the selected hotel has no photos
  #   When I navigate to the hotel details page
  #   Then I should see a message indicating no photos are available

  # Scenario: No reviews available for the hotel
  #   Given the selected hotel has no user reviews
  #   When I view the reviews section
  #   Then I should see a message indicating no reviews are available

  # # Handling Edge Cases
  # Scenario: Verify correct handling of unavailable amenities
  #   Given the hotel does not offer certain amenities
  #   When I view the amenities list
  #   Then those amenities should not be listed

  # Scenario: Verify price changes based on date
  #   When I change the check-in and check-out dates on the hotel details page
  #   Then I should see updated pricing reflecting the new dates

  # # Interaction with Reviews
  # Scenario: Filter reviews by rating
  #   When I filter reviews to show only those with 4 stars or higher
  #   Then I should only see reviews with a rating of 4 stars or above

  # Scenario: Sort reviews by most recent
  #   When I sort the reviews by most recent
  #   Then the reviews should be displayed in descending order of date

  # # Detailed Information Verification
  # Scenario: Verify detailed information for a specific room type
  #   When I select a specific room type on the hotel details page
  #   Then I should see:
  #     | Feature         | Expected Outcome                |
  #     | Room Photos     | Multiple images displayed       |
  #     | Description     | Detailed room description       |
  #     | Amenities       | List of room-specific amenities |
  #     | Pricing         | Accurate price information      |