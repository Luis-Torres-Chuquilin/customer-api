/** @format */

const request = require("supertest");
const app = require("../server");

/**
 * Is possible to write the follow conditions in the logic
 * Valid password conditions:
 *   - At least 8 characters
 *   - At most 32 characters
 *   - One lowercase letter
 *   - One uppercase letter
 *   - One digit
 *
 */

describe("Errors user Registration", () => {
  let email = "";

  beforeAll(() => {
    email = "test@tes.com";
  });
  test("Email is invalid, return 400", async () => {
    const response = await request(app)
      .post("/user/signup")
      .send({ Username: "user1@gmcom", Password: "cocololo2" });

    expect(response.status).toBe(400);
  });

  test("Password is empty, return 400", async () => {
    const response = await request(app)
      .post("/user/signup")
      .send({ Username: "user1@gm.com", Password: "" });

    expect(response.status).toBe(400);
  });

  test("User already Exist, return 409", async () => {
    const response = await request(app)
      .post("/user/signup")
      .send({ Username: "ssyd.dev@gmail.com", Password: "australia" });

    expect(response.status).toBe(409);
  });
});

describe("Errors user Registration", () => {
  let email = "";

  beforeAll(() => {
    email = "test@tes.com";
  });
  test("Method Not Allow In This Route, GET, PUT, PATCH, DELETE", async () => {
    await request(app).get("/user/signup").expect(405);
    await request(app).put("/user/signup").expect(405);
    await request(app).patch("/user/signup").expect(404); // Doble check, it should return 405
    await request(app).delete("/user/signup").expect(405);
  });
});
