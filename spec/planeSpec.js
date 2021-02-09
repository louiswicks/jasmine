'use strict';

describe('Plane', function(){
  var plane, airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined()
  });

  it('lands a plane at an aiport', function() {
    plane.land(airport)
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});


// describe("Plane", function(){
//   var plane;
//
//   it("working method returns true", function(){
//     plane = new Plane();
//     expect(plane.working()).toBe(true);
//   })
//
// })
