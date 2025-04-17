import { Component } from '@angular/core';
import {CitySearchComponentComponent} from './city-search-component/city-search-component.component';
import {ForeCastComponentComponent} from './fore-cast-component/fore-cast-component.component';
import {WeatherService} from '../../service/weather.service';


@Component({
  selector: 'app-weather-container-component',
  imports: [
    CitySearchComponentComponent,
    ForeCastComponentComponent,

  ],
  templateUrl: './weather-container-component.component.html',
  styleUrl: './weather-container-component.component.css'
})
export class WeatherContainerComponentComponent {
  forecastData: any;

  constructor(private weatherService: WeatherService) {}

  onCitySelected(city: string) {
    this.weatherService.getCoordinates(city).subscribe((res:any)=>{
      if(res.length > 0){
        const lat= res[0].lat;
        const lon= res[0].lon;

        this.weatherService.getForecast(lat,lon).subscribe((forecast)=>{
          this.forecastData = forecast;
        })
        console.log(res)
      }else{
        this.forecastData= null;
        alert('citta non trovata')
      }
    })
  }
}
