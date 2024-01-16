import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Coordinate } from '../model/Coordinate';

@Injectable({
  providedIn: 'root'
})
export class SolarCalculatorService {
  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

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

  getAnnualRevenue(
    energyProduction: number[],
    costPerKWh: number,
    operatingCost: number,
    initialInvestment: number,
  ) {
    const url = `${this.apiUrl}/solarEnergy/revenue`;
    const queryParams = {
      energyProduction: energyProduction,
      costPerKWh: costPerKWh,
      operatingCost: operatingCost,
      initialInvestment: initialInvestment,
    };
    return this._http.get<number>(url, { params: queryParams });
  }
}
