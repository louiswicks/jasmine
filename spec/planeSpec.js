'use strict';

describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});
// 'use strict';
//
// describe('Plane', function(){
//   var plane, airport;
//
//   beforeEach(function(){
//     plane = new Plane();
//     airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeoff']);
//   });
//
//   it('can land at an airport', function(){
//     expect(plane.land).not.toBeUndefined()
//   });
//
//   it('lands a plane at an aiport', function() {
//     plane.land(airport)
//     expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
//   });
//
//   it('a plane takes off from airport', function(){
//     plane.land(airport)
//     plane.takeoff();
//     expect(airport.clearForTakeoff).toHaveBeenCalledWith();
//   });
// });
