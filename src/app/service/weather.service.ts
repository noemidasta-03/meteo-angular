import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey= environment.apiKey;
  private geoUrl= environment.geoApiUrl;
  private forecastApiUrl= environment.forecastApiUrl;

  constructor(private http:HttpClient) { }

  getCoordinates(city:string){
    const url= `${this.geoUrl}?q=${city}&limit=1&appid=${this.apiKey}`;
    return this.http.get(url)
  }

  getForecast(lat:number,lon:number){
    const url = `${this.forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url)
  }
}
