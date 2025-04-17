import { Routes } from '@angular/router';
import {
  WeatherContainerComponentComponent
} from './component/weather-container-component/weather-container-component.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';

export const routes: Routes = [
  {path:'', component:DashboardComponent },
  {path:'weather', component:WeatherContainerComponentComponent},

];
