const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(() => {
    connection.destroy();
  });
  it("should be ableto create  new ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "contato@apa.com.br",
        whatsapp: "11945462938",
        city: "São Paulo",
        uf: "SP"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
