import reducer from "./skillsSlice";
describe("Skills Slice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      skills: [],
      skillsIsOpen: false,
    });
  });
});
