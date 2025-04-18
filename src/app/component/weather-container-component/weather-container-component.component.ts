import { Component } from '@angular/core';
import {CitySearchComponentComponent} from './city-search-component/city-search-component.component';
import {ForeCastComponentComponent} from './fore-cast-component/fore-cast-component.component';
import {WeatherService} from '../../service/weather.service';
import {NgIf} from '@angular/common';
import {coordinatesResponse} from '../../models/coordinates.model';
import {forecastResponse} from '../../models/forecast.model';
import {weatherResponse} from '../../models/weather.model';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';


@Component({
  selector: 'app-weather-container-component',
  imports: [
    CitySearchComponentComponent,
    ForeCastComponentComponent,
    CurrentWeatherComponent,
    NgIf,

  ],
  templateUrl: './weather-container-component.component.html',
  styleUrl: './weather-container-component.component.css'
})


export class WeatherContainerComponentComponent {
  forecastData: any;
  currentWeatherData: any;

  constructor(private weatherService: WeatherService) {}

  onForecastRequest(city: string) {
    this.weatherService.getCoordinates(city).subscribe((res:coordinatesResponse[])=>{
      if(res.length> 0){
        const lat= res[0].lat;
        const lon= res[0].lon;

        this.weatherService.getForecast(lat,lon).subscribe((forecast:forecastResponse)=>{
          this.forecastData = forecast;
          this.currentWeatherData= null
        })
        console.log(res)
      }else{
        this.handleCityNotFound()
      }
    })
  }

  onCurrentWeatherRequest(city: string) {
    this.weatherService.getCoordinates(city).subscribe((res:any)=>{
      if(res.length > 0){
        const lat= res[0].lat;
        const lon= res[0].lon;
        this.weatherService.getCurrentWeather(lat,lon).subscribe((weather:weatherResponse)=>{
          this.currentWeatherData = weather;
          this.forecastData = null;
        })
      }else{
        this.handleCityNotFound()
      }
    })
  }

  handleCityNotFound(){
    this.forecastData = null;
    this.currentWeatherData = null;
    alert('citta non trovata')
  }
}
