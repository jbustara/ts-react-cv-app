import reducer from "./educationSlice";
describe("Education Slice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      educations: [],
      status: "",
    });
  });
});
