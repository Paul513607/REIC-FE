import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Polygon } from '../model/Polygon';
import { Observable } from 'rxjs';
import { PolygonVm } from '../model/PolygonVm';
import { DividedPolygonVm } from '../model/DividedPolygonVm';
import { Coordinate } from '../model/Coordinate';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getDividedPolygon(polygon: Polygon): Observable<DividedPolygonVm> {
    const url = `${this.apiUrl}/polygon/divide`;
    return this._http.post<DividedPolygonVm>(url, polygon);
  }

  getPolygonCenter(polygon: Polygon): Observable<Coordinate> {
    const url = `${this.apiUrl}/polygon/center`;
    return this._http.post<Coordinate>(url, polygon);
  }

  getSolarEnergyProduction(
    coordinate: Coordinate,
    solarPanelArea: number,
    option: number
  ) {
    const url = `${this.apiUrl}/solarEnergy/production`;
    console.log('📢 [map.service.ts:34]', coordinate);
    const queryParams = {
      latitude: coordinate.lat,
      longitude: coordinate.long,
      solarPanelArea,
      option,
    };
    return this._http.get<number[]>(url, { params: queryParams });
  }
}
