import { BaseComponent } from "../../bases/base-component";

class HotelClassComponent extends BaseComponent {
  selectors = {
    twoStarCheckBox: "input[type='checkbox'][value='2']",
    threeStarCheckBox: "input[type='checkbox'][value='3]",
    fourStarCheckBox: "input[type='checkbox'][value='4']",
    fiveStarCheckBox: "input[type='checkbox'][value='5']",
    clearButton: "button[aria-label='Clear Hotel class']",
  };

  elements = {
    twoStarCheckBox: () => this.getElement(this.selectors.twoStarCheckBox),
    threeStarCheckBox: () => this.getElement(this.selectors.twoStarCheckBox),
    fourStarCheckBox: () => this.getElement(this.selectors.twoStarCheckBox),
    fiveStarCheckBox: () => this.getElement(this.selectors.twoStarCheckBox),
    clearButton: () => this.getElement(this.selectors.clearButton),
  };

  select2Start(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.twoStarCheckBox());
  }

  select3Start(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.threeStarCheckBox());
  }

  select4Start(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.fourStarCheckBox());
  }

  select5Start(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.fiveStarCheckBox());
  }

  clearSelectioN(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.clearButton());
  }
}

export const hotelClassComponent = new HotelClassComponent();
