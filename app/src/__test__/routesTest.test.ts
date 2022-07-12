/** @format */

import request from "supertest";

import app from "../server";

describe("Test Routes", () => {
  test("returns 404 Route Not Found", async () => {
    const response = await request(app)
      .post("/anyroute")
      .send({ username: "user1", password: "cocololo" });

    expect(response.status).toBe(404);
  });
  test("returns 405 Method Not Allow", async () => {
    const response = await request(app)
      .get("/user/signup")
      .send({ Username: "user1", Password: "cocololo" });

    expect(response.status).toBe(405);
  });
});
