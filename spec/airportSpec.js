describe("airport", function() {
  var airport;

  // let plane: plane;

  beforeEach(function() {
    airport = new Airport();
  });


  it("a land method", function() {
    spyOn(airport, 'land');
    airport.land(plane);

    expect(airport.land).toHaveBeenCalledWith(plane);
  });
});
