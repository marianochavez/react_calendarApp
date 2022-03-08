import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";

describe("fetch tests", () => {
  let token = "";

  test("fetchWithoutToken should work", async () => {
    const res = await fetchWithoutToken(
      "auth",
      {
        email: "mariano@gmail.com",
        password: "123456",
      },
      "POST"
    );

    expect(res instanceof Response).toBe(true);
    const body = await res.json();
    expect(body.ok).toBe(true);

    token = body.token;
  });

  test("fetchWithToken should work", async () => {
    localStorage.setItem("token", token);

    const res = await fetchWithToken("event/622217c3c15be4f64aa0b8b8", {}, "DELETE");
    const body = await res.json();

    expect(body.msg).toBe("Evento no encontrado");
  });
});
