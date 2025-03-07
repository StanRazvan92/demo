import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { hotelSearchPage } from "../pages/hotel-serch.page";
import { hotelDetailsOverviewPage } from "../pages/hotel-details-overview.page";

Given("I am on the Google Travel Hotel Search page", () => {});

When("I enter {string} as the destination", (destination: string) => {
  hotelSearchPage.search(destination);
});

When("I select {string} as the destination", (destination: string) => {
  hotelSearchPage.selectSearchOption(destination);
});

When("I select first hotel from result list", () => {
  hotelSearchPage.selectNthResultFromList(0);
});

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
