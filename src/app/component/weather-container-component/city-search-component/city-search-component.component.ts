import {Component, EventEmitter,Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-city-search-component',
  imports: [
    FormsModule
  ],
  templateUrl: './city-search-component.component.html',
  styleUrl: './city-search-component.component.css'
})
export class CitySearchComponentComponent {
  city:string= '';

  @Output() forecastRequested= new EventEmitter<string>();
  @Output() currentWeatherRequested= new EventEmitter<string>();

  search(type: 'forecast'| 'current'){
    if(type === 'forecast'){
      this.forecastRequested.emit(this.city)
    }else{
      this.currentWeatherRequested.emit(this.city)
    }
  }
}
