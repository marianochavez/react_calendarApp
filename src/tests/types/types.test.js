import { types } from "../../types/types";

describe("types tests", () => {
  test("should return exactly object", () => {
    expect(types).toEqual({
      uiOpenModal: "[ui] Open Modal",
      uiCloseModal: "[ui] Close Modal",

      eventSetActive: "[event] Set Active",
      eventLogout: "[event] Event Logout",

      eventStartAddNew: "[event] Start Add New",
      eventAddNew: "[event] Add New",
      eventClearActiveEvent: "[event] Clear Active Event",
      eventUpdated: "[event] Event Updated",
      eventDeleted: "[event] Event Deleted",
      eventLoaded: "[event] Event Loaded",

      authCheckingStart: "[auth] Checking login state",
      authCheckingFinish: "[auth] Checking login state finish",
      authStartLogin: "[auth] Start login",
      authLogin: "[auth] Login",
      authStartRegister: "[auth] Start register",
      authStartTokenRenew: "[auth] Start token renew",
      authLogout: "[auth] Logout",
    });
  });
});
