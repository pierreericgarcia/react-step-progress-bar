import { Step } from ".";

describe("<Step/>", () => {
  describe("getSafePosition", () => {
    it("should returns 0 if value is negative", () => {
      expect(Step.getSafePosition(-124)).toEqual(0);
    });
    it("should returns 100 if value is over 100", () => {
      expect(Step.getSafePosition(1307)).toEqual(100);
    });
    it("should returns value if value is between 0 and 100", () => {
      expect(Step.getSafePosition(56)).toEqual(56);
    });
  });
});
