const request = require("supertest");

const supertest = request(require("../app"));

test("Get 200 for API homepage", async () => {
    const result =  await supertest.get('/');
    expect(result.status).toBe(200);
  });
