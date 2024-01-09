import { Coordinate } from './Coordinate';

export class Polygon {
  coordinates: Coordinate[] = [];

  constructor(coordinates: Coordinate[]) {
    this.coordinates = coordinates;
  }
}
