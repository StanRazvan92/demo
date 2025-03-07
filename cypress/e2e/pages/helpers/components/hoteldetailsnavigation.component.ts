import { BaseComponent } from "../bases/base-component";

class HotelDetailsNavigationComponent extends BaseComponent {
  selectors = {
    overviewSpan: "#overview > span",
    pricesSpan: "#prices > span",
    reviewsSpan: "#reviews > span",
    photosSpan: "#photos > span",
    aboutSpan: "#details > span",
  };

  elements = {
    overviewSpan: () =>
      cy.get(this.selectors.overviewSpan).should("be.visible"),
    pricesSpan: () => cy.get(this.selectors.pricesSpan).should("be.visible"),
    reviewsSpan: () => cy.get(this.selectors.reviewsSpan).should("be.visible"),
    photosSpan: () => cy.get(this.selectors.photosSpan).should("be.visible"),
    aboutSpan: () => cy.get(this.selectors.aboutSpan).should("be.visible"),
  };

  openOverview(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.overviewSpan());
  }

  openPrices(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.pricesSpan());
  }

  openReviews(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.reviewsSpan());
  }

  openPhotos(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.photosSpan());
  }

  openAbout(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.aboutSpan());
  }
}

export const hotelDetailsNavigationComponent =
  new HotelDetailsNavigationComponent();
