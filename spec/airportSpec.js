'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});

// 'use strict';
//
// describe('Airport', function() {
//   var airport, plane, weather;
//
//   beforeEach(function() {
//      airport = new Airport(weather);
//      plane = jasmine.createSpyObj('plane', ['land']);
//      weather = jasmine.createSpyObj('weather', ['isStormy']);
//   });
//
//   it('has no planes by default', function() {
//     expect(airport.planes()).toEqual([]);
//   });
//
// describe('under normal conditions',function(){
//       beforeEach(function(){
//         weather.isStormy.and.returnValue(false);
//       });
//   it('lets a plane land', function() {
//     airport.clearForLanding(plane);
//     expect(airport.planes()).toContain(plane);
//   });
//
//   it('lets a plane takeoff', function(){
//     airport.clearForTakeoff();
//     expect(airport.planes()).not.toContain(plane);
//   });
// });
// });
//
// describe('under stormy conditions',function(){
//     beforeEach(function(){
//       airport = new Airport(weather);
//       weather = jasmine.createSpyObj('weather', ['isStormy']);
//       weather.isStormy().and.returnValue(true);
//     });
//     it('does not clear planes for landing', function(){
//       expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
//     });
//     it('does not clear planes for takeoff', function(){
//       expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
//     });
//
//   });
