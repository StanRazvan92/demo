import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { hotelSearchPage } from "../pages/hotel-serch.page";
import { hotelDetailsOverviewPage } from "../pages/hotel-details-overview.page";
import { hotelDetailsAboutPage } from "../pages/hotel-details-about.page";
import { hotelDetailsNavigationComponent } from "../pages/helpers/components/hoteldetailsnavigation.component";

Given(
  "I have selected a hotel from the search results on Google Travel",
  () => {
    hotelSearchPage.selectNthResultFromList(0);
  }
);

Then("I should see all hotel details components loaded", () => {
  hotelDetailsOverviewPage.elements.checkInContainer();
  hotelDetailsOverviewPage.elements.photosContainer();
  hotelDetailsOverviewPage.elements.photosContainer();
});

Then("I should see a gallery of multiple photos of the hotel", () => {
  hotelDetailsOverviewPage.elements.photosContainer();
});

Then("I should see a detailed description of the hotel", () => {
  hotelDetailsNavigationComponent.openAbout();
  hotelDetailsAboutPage.elements.aboutHotelContainer();
});
