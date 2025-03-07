import { isNullOrEmpty } from "../helpers/checks";

export class BasePomObject {
  protected getElement(
    selector: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    if (isNullOrEmpty(selector)) {
      throw `Element selector can't be null or empty.`;
    }

    return cy.get(selector).should("be.visible").should("be.enabled");
  }

  protected getElements(
    selector: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    if (isNullOrEmpty(selector)) {
      throw `Element selector can't be null or empty.`;
    }

    return cy.get(selector);
  }

  protected click(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    return element.click({ force: true });
  }

  protected type(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    text: string
  ) {
    return element
      .focus()
      .clear({ force: true })
      .type(text, { force: true, delay: 0 })
      .blur()
      .should("have.value", text);
  }
}
