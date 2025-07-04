import {Component, OnInit} from '@angular/core';
import {CitySearchComponentComponent} from './city-search-component/city-search-component.component';
import {ForeCastComponentComponent} from './fore-cast-component/fore-cast-component.component';
import {WeatherService} from '../../service/weather.service';
import {NgIf} from '@angular/common';
import {coordinatesResponse} from '../../models/coordinates.model';
import {forecastResponse} from '../../models/forecast.model';
import {WeatherResponse} from '../../models/weather.model';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';
import {ToastService} from '../../service/toast.service';
import {ToastComponent} from '../toast/toast.component';


@Component({
  selector: 'app-weather-container-component',
  imports: [
    CitySearchComponentComponent,
    ForeCastComponentComponent,
    CurrentWeatherComponent,
    NgIf,
    ToastComponent,

  ],
  templateUrl: './weather-container-component.component.html',
  styleUrl: './weather-container-component.component.css'
})


export class WeatherContainerComponentComponent{
  forecastData: forecastResponse | null = null;
  currentWeatherData: WeatherResponse | null = null;
  message:string = '';

  constructor(private weatherService: WeatherService,private toastService: ToastService) {}

  onForecastRequest(city: string) {
    this.weatherService.getCoordinates(city).subscribe((res:coordinatesResponse[])=>{
      if(res.length> 0){
        const lat= res[0].lat;
        const lon= res[0].lon;

        this.weatherService.getForecast(lat,lon).subscribe((forecast:forecastResponse)=>{
          this.forecastData = forecast;
          this.currentWeatherData= null
          console.log(forecast);
        })

      }else{
        this.handleCityNotFound()
      }
    })
  }

  onCurrentWeatherRequest(city: string) {
    this.weatherService.getCoordinates(city).subscribe((res:coordinatesResponse[] )=>{
      if(res.length > 0){
        const lat= res[0].lat;
        const lon= res[0].lon;
        this.weatherService.getCurrentWeather(lat,lon).subscribe((weather:WeatherResponse)=>{
          this.currentWeatherData = weather;
          this.forecastData = null;
          console.log(weather);
        })
      }else{
        this.handleCityNotFound()
      }
    })
  }
  handleCityNotFound(){
    this.forecastData = null;
    this.currentWeatherData = null;
    this.toastService.getToast('città non trovata').subscribe(message => {
      this.message = message;
    });
  }
}
