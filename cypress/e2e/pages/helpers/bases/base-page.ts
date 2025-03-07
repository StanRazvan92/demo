import { isNullOrEmpty } from "../helpers/checks";
import { BasePomObject } from "./base-object";

export class BasePage extends BasePomObject {
  protected loadedSelector: string = "";
  protected visibilitySelector: string = "";

  protected timeout_visibilitySelector: number = 15000;
  protected timeout_loadedSelector: number = 15000;

  protected shouldBeVisible(): Cypress.Chainable<JQuery<HTMLElement>> {
    if (isNullOrEmpty(this.visibilitySelector)) {
      throw `Class does not provide an implementation for 'visibilitySelector' selector.`;
    }

    return cy
      .get(this.visibilitySelector, {
        timeout: this.timeout_visibilitySelector,
      })
      .should("be.visible");
  }

  protected shouldBeLoaded(): Cypress.Chainable<JQuery<HTMLElement>> {
    if (isNullOrEmpty(this.loadedSelector)) {
      throw `Class does not provide an implementation for 'loadedSelector' selector.`;
    }

    return cy
      .get(this.loadedSelector, { timeout: this.timeout_loadedSelector })
      .should("be.visible");
  }

  protected shouldBeFullyLoaded(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.shouldBeVisible().then(() => {
      return this.shouldBeLoaded();
    });
  }
}
