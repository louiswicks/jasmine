'use strict';

describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });

  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined()
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
