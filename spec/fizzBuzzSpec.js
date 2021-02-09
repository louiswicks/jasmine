describe("fizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("prints numbers", function() {
    expect(fizzBuzz.play(2)).toBe(2);
  });
  it("returns fizz for multiples of 3", function() {
    expect(fizzBuzz.play(6)).toBe("fizz");
  });
  it("returns buzz for multiples of 5", function() {
    expect(fizzBuzz.play(10)).toBe("buzz");
  });
  it("returns fizzbuzz for multiples of 5 and 3", function() {
    expect(fizzBuzz.play(15)).toBe("fizzbuzz");
  });
});
