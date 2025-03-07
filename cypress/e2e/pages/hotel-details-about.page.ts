import { BasePage } from "./helpers";

class HotelDetailsAboutPage extends BasePage {
  private selectors = {
    aboutHotelContainer:
      "#details > c-wiz > c-wiz > div > div > div > div > section:nth-child(1)",
  };

  elements = {
    aboutHotelContainer: () =>
      cy.get(this.selectors.aboutHotelContainer).should("be.visible"),
  };
}

export const hotelDetailsAboutPage = new HotelDetailsAboutPage();
