'use scrict';

class Airport {

  constructor() {
    this._hangar = []
  };

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    this._hangar.push(plane);
  };
};
// class Airport {
//   constructor(planes) {
//     this.planes = [];
//   }
//
//   land(plane) {
//     this.planes.push(plane);
//   }
//
//   takeoff(plane) {
//     this.planes.pop(plane);
//   }
// }
