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

  @Output() citySelected= new EventEmitter<string>();

  search(){
    if(this.city){
      this.citySelected.emit(this.city)
    }
  }
}
