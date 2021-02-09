describe("airport", function() {
  var airport, plane, planes;

  // let plane: plane;

  beforeEach(function() {
    airport = new Airport(planes);
  });


  it("can land a plane", function() {
    airport.land(plane)
    expect(airport.planes).toContain(plane);
  });

  it("can take off", function() {
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.planes.length).toBe(0);
  });

  // it("a land method", function() {
  //   spyOn(airport, 'land');
  //   airport.land(plane);
  //
  //   expect(airport.land).toHaveBeenCalledWith(plane);
  // });
});
