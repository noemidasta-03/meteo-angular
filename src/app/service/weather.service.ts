import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {coordinatesResponse} from "../models/coordinates.model";
import {forecastResponse} from "../models/forecast.model";
import {weatherResponse} from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey= environment.apiKey;
  private geoUrl= environment.geoApiUrl;
  private forecastApiUrl= environment.forecastApiUrl;
  private currentWeather= environment.currentWeather;

  constructor(private http:HttpClient) { }

  getCoordinates(city:string):Observable<coordinatesResponse[]> {
    const url= `${this.geoUrl}?q=${city}&limit=1&appid=${this.apiKey}`;
    return this.http.get<coordinatesResponse[]>(url)
  }

  getForecast(lat:number,lon:number):Observable<forecastResponse> {
    const url = `${this.forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get<forecastResponse>(url)
  }
  getCurrentWeather(lat:number,lon:number):Observable<weatherResponse>{
    let params = new HttpParams();
    params= params.set('lat', lat);
    params= params.set('lon', lon);
    params= params.set('appid', this.apiKey);
    params= params.set('units', 'metric');
    return this.http.get<weatherResponse>(`${this.currentWeather}`, {params: params});
  }
}
