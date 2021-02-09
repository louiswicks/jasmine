class Airport {
  constructor(planes) {
    this.planes = [];
  }

  land(plane) {
    this.planes.push(plane);
  }

  takeoff(plane) {
    return true;
  }
}
