import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {WeatherResponse} from '../../../models/weather.model';

@Component({
  selector: 'app-current-weather',
  imports: [
    NgIf
  ],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  @Input() currentWeather: WeatherResponse | null = null ;

}
