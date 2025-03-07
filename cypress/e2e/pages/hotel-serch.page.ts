import { BasePage } from "./helpers";

class HotelSearchPage extends BasePage {
  private selectors = {
    searchBoxInput:
      "input[placeholder='Search for places, hotels and more'][autofocus]",
    searchBoxClearButton:
      "div[jsaction='keydown:ecIpnc; input:afzebe; click:fJchAc'] button[aria-label='Clear'].VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.mN1ivc.evEd9e",
    searchBoxSelectionItems:
      "div.ZGEB9c.yRXJAe.a4gL0d.vNSkmc.iWO5td.BDJ8fb div ul li span",
    checkInInput:
      "div.w1RZXe.sgtnuf.abhqy.bnIl4c.K6nYpf div.NA5Egc.ESCxub.wg2eAc input[aria-label='Check-in']",
    checkOutInput:
      "div.w1RZXe.sgtnuf.abhqy.bnIl4c.K6nYpf div.NA5Egc.ESCxub.wg2eAc input[aria-label='Check-out']",
    numberOfTravelersSelector: "div.YFfNHd div.cQnuXe.k0gFV div[role='button']",
    allFiltersButton:
      "#yDmH0d > c-wiz.zQTmif.SSPGKf.AglWE > div > c-wiz > div.dTQsx.gBIxsf > div.MawWP > div.wMMMNd > c-wiz > div > div > div.E4DaWc.AJr5uf > div > div.AN2bF > div.mpSL5d > div > div > div.wpMGDb.Vz4hIc.Vy4Vcc > div > button",
    hotelResultList: "#id > c-wiz > c-wiz > div > a",
    googleMap:
      "#yDmH0d > c-wiz.zQTmif.SSPGKf.AglWE > div > c-wiz > div.dTQsx.gBIxsf > div.JvLuC > div.qE7dze > div > c-wiz",
    resultLocationAndCount: "#id > c-wiz > c-wiz:nth-child(3) > h1 > div.GDEAO",
  };

  elements = {
    searchBoxInput: () => this.getElement(this.selectors.searchBoxInput),
    searchBoxClearButton: () =>
      this.getElement(this.selectors.searchBoxClearButton),
    searchBoxSelectionItems: () =>
      this.getElements(this.selectors.searchBoxSelectionItems),
    checkInInput: () => this.getElement(this.selectors.checkInInput),
    checkOutInput: () => this.getElement(this.selectors.checkOutInput),
    numberOfTravelersSelector: () =>
      cy.get(this.selectors.numberOfTravelersSelector).should("be.visible"),
    allFiltersButton: () => this.getElement(this.selectors.allFiltersButton),
    hotelResultList: () => this.getElements(this.selectors.hotelResultList),
    googleMap: () => cy.get(this.selectors.googleMap).should("be.visible"),
    resultLocationAndCount: () => cy.get(this.selectors.resultLocationAndCount),
  };

  search(searchText: string): Cypress.Chainable<JQuery<HTMLElement>> {
    this.click(this.elements.searchBoxClearButton());
    return this.type(this.elements.searchBoxInput(), searchText);
  }

  selectSearchOption(
    selectionOption: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(
      this.elements.searchBoxSelectionItems().contains(selectionOption)
    );
  }

  selectCheckInDate(startDate: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.type(this.elements.checkInInput(), startDate);
  }

  selectCheckOutDate(endDate: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.type(this.elements.checkOutInput(), endDate);
  }

  clearSearch(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.searchBoxClearButton());
  }

  selectNthResultFromList(nth: number): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.click(this.elements.hotelResultList().eq(nth));
  }
}

export const hotelSearchPage = new HotelSearchPage();
