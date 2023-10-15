import World from "./World.js";

describe("Given the class World's constructor", () => {
  describe("When it is called with 3 and false", () => {
    test("Then it should return an object with two properties pointing to 3 and false", () => {
      const expectedLength = 3;
      const expectedBoolean = false;

      const world = new World();
      const values = world.createWorld(expectedLength, expectedBoolean);

      expect(values.length).toBe(expectedLength);
      expect(values[0][0].isAlive).toBe(expectedBoolean);
    });
  });
});
