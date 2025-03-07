  @nightly
  Feature: Viewing Hotel Search Results

  # Background:
  #   Given I have performed a hotel search for "New York" with check-in date "2023-12-01" and check-out date "2023-12-07"
  #   And I specified 2 adults and 1 room
    
  # Scenario: Verify results are relevant to the search criteria
  #   Then I should see search results relevant to "New York" for the specified dates

  # Scenario: Verify hotel details are displayed correctly
  #   When I view the search results
  #   Then I should see each hotel entry with a name, star rating, price, and a thumbnail image

  # # Sorting and Filtering
  # Scenario: Sort results by price (low to high)
  #   When I sort the search results by price from low to high
  #   Then the results should be displayed in ascending order of price

  # Scenario: Sort results by rating (high to low)
  #   When I sort the search results by rating from high to low
  #   Then the results should be displayed in descending order of rating 

  # Scenario: Filter results by star rating
  #   When I apply a filter for hotels with a star rating of 4 or higher 
  #   Then I should only see hotels with a star rating of 4 stars or above

  # Scenario: Filter results by price range
  #   When I apply a price filter for hotels priced between $150 and $300
  #   Then I should only see hotels priced within the $150-$300 range

  # Scenario: Filter results by amenities
  #   When I apply a filter for amenities "Spa" and "Restaurant"
  #   Then I should only see hotels that offer Spa and Restaurant services

  # # Pagination Scenarios
  # Scenario: View next page of results
  #   Given there are more than 10 hotels in the search results
  #   When I navigate to the next page of search results
  #   Then I should see the next set of hotels listed

  # Scenario: No results after applying filters
  #   When I apply unrealistic filters that match no hotels
  #   Then I should see a message indicating no hotels match the selected criteria

  # # Detailed Results Verification
  # Scenario: Verify hotel name, rating, price, and image for each result
  #   When I review the search results
  #   Then each hotel should display:
  #     | Hotel Name | Star Rating | Price  | Thumbnail Image |
  #     | true       | true        | true   | true            |

  # # Sorting Handling Empty Result
  # Scenario: Sort operation when result set is empty
  #   Given there are no search results 
  #   When I attempt to sort by any criteria
  #   Then I should see a message indicating no results are available for sorting

  # # User Preference Persistence
  # Scenario: Verify user preferences are retained
  #   When I set preferences for sorting by "price" and filtering by "Free Cancellation"
  #   And I navigate away from and return to the search results page
  #   Then my sorting and filter preferences should persist

  # # Negative Test Cases 
  # Scenario: Invalid sorting criteria
  #   When I select a non-existent sorting criteria
  #   Then I should see an error message for invalid sort selection