describe("airport", function() {
  var airport;
  var plane;

  // let plane: plane;

  beforeEach(function() {
    airport = new Airport();
  });


  it("can land a plane", function() {
    expect(airport.land(plane)).toBe(true);
  });

  // it("a land method", function() {
  //   spyOn(airport, 'land');
  //   airport.land(plane);
  //
  //   expect(airport.land).toHaveBeenCalledWith(plane);
  // });
});
