import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PolygonEntity } from '../model/PolygonEntity';
import { Coordinate } from '../model/Coordinate';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  // this should return an array of tuples of the form (colorX, (lat1, lng1), (lat2, lng2), ...)
  getPolygonColors(baseCoordinates: Coordinate[]): Observable<PolygonEntity[]> {
    let coord1 = baseCoordinates[0];
    let coord2 = baseCoordinates[1];
    let coord3 = baseCoordinates[2];
    let coord4 = baseCoordinates[3];

    let color1 = "red";
    let color2 = "blue";
    let color3 = "green";
    let color4 = "yellow";

    let polygon1: PolygonEntity = {
      color: 'red',
      coordinates: [
        { lat: coord1.lat + 0.001, lng: coord1.lng + 0.001 },
        { lat: coord2.lat + 0.001, lng: coord2.lng + 0.001 },
        { lat: coord3.lat + 0.001, lng: coord3.lng + 0.001 },
        { lat: coord4.lat + 0.001, lng: coord4.lng + 0.001 }
      ]
    }
    let polygon2: PolygonEntity = {
      color: 'blue',
      coordinates: [
        { lat: coord1.lat - 0.005, lng: coord1.lng - 0.005 },
        { lat: coord2.lat - 0.005, lng: coord2.lng - 0.005 },
        { lat: coord3.lat + 0.005, lng: coord3.lng + 0.005 },
        { lat: coord4.lat + 0.005, lng: coord4.lng + 0.005 }
      ],
    }

    let polygons: PolygonEntity[] = [polygon1, polygon2];
    return of(polygons);
  }
}
