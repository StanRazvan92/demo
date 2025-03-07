import { BaseComponent } from "../bases/base-component";

class HotelSearchFiltersComponent extends BaseComponent {
  selectors = {
    filterNavigatorButton:
      "button[aria-label='All filters'].VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.ksBjEc.lKxP2d.LQeN7.bRx3h.x4Vnpe.yJQRU.sIWnMc.hNyRxf.cd29Sd",
    clearAllButton:
      "button[jsname='tHuhgf'].VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.ksBjEc.lKxP2d.LQeN7.bRx3h.yJQRU",
    closeButton: "div.AJUxkf.WGqsK div.i73Eid.I1vvIb button[jsname='tHuhgf']",
    twoStarCheckBox:
      "div[aria-label='Hotel class'] input[type='checkbox'][value='2']",
    threeStarCheckBox:
      "div[aria-label='Hotel class'] input[type='checkbox'][value='3']",
    fourStarCheckBox:
      "div[aria-label='Hotel class'] input[type='checkbox'][value='4']",
    fiveStarCheckBox:
      "div[aria-label='Hotel class'] input[type='checkbox'][value='5']",
  };

  elements = {
    filterNavigatorButton: () =>
      this.getElement(this.selectors.filterNavigatorButton),
    clearAllButton: () => this.getElement(this.selectors.clearAllButton),
    closeButton: () => this.getElement(this.selectors.closeButton),
    twoStarCheckBox: () =>
      cy.get(this.selectors.twoStarCheckBox).should("be.enabled"),
    threeStarCheckBox: () =>
      cy.get(this.selectors.threeStarCheckBox).should("be.enabled"),
    fourStarCheckBox: () =>
      cy.get(this.selectors.fourStarCheckBox).should("be.enabled"),
    fiveStarCheckBox: () =>
      cy.get(this.selectors.fiveStarCheckBox).should("be.enabled"),
  };

  close(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.closeButton());
  }

  open(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.filterNavigatorButton());
  }

  clearAll(): Cypress.Chainable<JQuery<HTMLElement>> {
    this.open();
    return this.click(this.elements.clearAllButton());
  }

  selectHotelClass(
    numberOfStars: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    this.open();

    switch (numberOfStars) {
      case "2":
        return this.click(this.elements.twoStarCheckBox());
      case "3":
        return this.click(this.elements.threeStarCheckBox());
      case "4":
        return this.click(this.elements.fourStarCheckBox());
      case "5":
        return this.click(this.elements.fiveStarCheckBox());
      default:
        throw "Number of stars does not exist!";
    }
  }
}

export const hotelSearchFiltersComponent = new HotelSearchFiltersComponent();
