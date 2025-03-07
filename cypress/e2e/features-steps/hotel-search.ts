import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { hotelSearchPage } from "../pages/hotel-serch.page";
import { hotelDetailsOverviewPage } from "../pages/hotel-details-overview.page";
import { hotelSearchFiltersComponent } from "../pages/helpers/components/hotelsearchfilters.component";

Given("I am on the Google Travel Hotel Search page", () => {});

When("I enter {string} as the destination", (destination: string) => {
  hotelSearchPage.search(destination);
  cy.wait(3000);
});

When("I select {string} as the destination", (destination: string) => {
  hotelSearchPage.selectSearchOption(destination);
  cy.wait(3000);
});

When("I select first hotel from result list", () => {
  hotelSearchPage.selectNthResultFromList(0);
});

Then(
  "I apply a filter with a hotel class of {string}",
  (numberOfStars: string) => {
    hotelSearchFiltersComponent.selectHotelClass(numberOfStars);
    cy.wait(3000);
    hotelSearchFiltersComponent.close();
  }
);

Then("I should see details about that hotel", () => {
  hotelDetailsOverviewPage.elements.checkInContainer();
  hotelDetailsOverviewPage.elements.photosContainer();
  hotelDetailsOverviewPage.elements.raitingAndPriceContainer();
});

Then("I should see all components loaded", () => {
  hotelSearchPage.clearSearch();
  hotelSearchPage.elements.searchBoxInput();
  hotelSearchPage.elements.checkInInput();
  hotelSearchPage.elements.checkOutInput();
  hotelSearchPage.elements.numberOfTravelersSelector();
  hotelSearchPage.elements.allFiltersButton();
  hotelSearchPage.elements.hotelResultList().should("have.length.above", 10);
  hotelSearchPage.elements.googleMap();
});

Then("I should be able to see hotels from {string}", (destination: string) => {
  hotelSearchPage.elements.resultLocationAndCount().contains(destination);
});

Then(
  "I should be able to change check-in to {string}",
  (checkInDate: string) => {
    hotelSearchPage.selectCheckInDate(checkInDate);
  }
);

Then(
  "I should be able to change check-out to {string}",
  (checkOutDate: string) => {
    hotelSearchPage.selectCheckOutDate(checkOutDate);
  }
);

Then("I should see hotels with {string} stars", (numberOfStars: string) => {
  hotelDetailsOverviewPage.hotelStarsShouldBe(numberOfStars);
});
