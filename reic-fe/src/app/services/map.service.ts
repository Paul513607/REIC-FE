import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Polygon } from '../model/Polygon';
import { Observable } from 'rxjs';
import { PolygonVm } from '../model/PolygonVm';
import { DividedPolygonVm } from '../model/DividedPolygonVm';

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
}
