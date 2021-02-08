describe("fizzBuzz", function() {
  it("prints numbers", function() {
    expect(fizzBuzz(2)).toBe(2);
  });
  it("returns fizz for multiples of 3", function() {
    expect(fizzBuzz(6)).toBe("fizz");
  });
  it("returns buzz for multiples of 5", function() {
    expect(fizzBuzz(10)).toBe("buzz");
  });
  it("returns fizzbuzz for multiples of 5 and 3", function() {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
});
