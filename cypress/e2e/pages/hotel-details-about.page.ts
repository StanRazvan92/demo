import { BasePage } from "./helpers";

class HotelDetailsAboutPage extends BasePage {
  private selectors = {
    aboutHotelContainer:
      "#details > c-wiz > c-wiz > div > div > div > div > section:nth-child(1)",
    amenitiesHotelContainer:
      "#details > c-wiz > c-wiz > div > div > div > div > section:nth-child(3) div.SPXCmb",
  };

  elements = {
    aboutHotelContainer: () =>
      cy.get(this.selectors.aboutHotelContainer).should("be.visible"),
    amenitiesHotelContainer: () =>
      cy.get(this.selectors.amenitiesHotelContainer).should("be.visible"),
  };
}

export const hotelDetailsAboutPage = new HotelDetailsAboutPage();
