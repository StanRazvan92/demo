import { BasePage } from "./helpers";

class HotelDetailsOverviewPage extends BasePage {
  private selectors = {
    raitingAndPriceContainer:
      "#overview > c-wiz.K1smNd > c-wiz:nth-child(1) > div > section",
    photosContainer:
      "#overview > c-wiz.K1smNd > c-wiz:nth-child(2) > div > div > div",
    checkInContainer:
      "#overview > c-wiz.K1smNd > c-wiz:nth-child(3) > div > section",
  };

  elements = {
    raitingAndPriceContainer: () =>
      cy.get(this.selectors.raitingAndPriceContainer).should("be.visible"),
    photosContainer: () =>
      cy.get(this.selectors.photosContainer).should("be.visible"),
    checkInContainer: () =>
      cy.get(this.selectors.checkInContainer).should("be.visible"),
  };
}

export const hotelDetailsOverviewPage = new HotelDetailsOverviewPage();
