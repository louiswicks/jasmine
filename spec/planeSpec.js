describe("Plane", function(){
  var plane;

  it("working method returns true", function(){
    plane = new Plane();
    expect(plane.working()).toBe(true);
  })

})
