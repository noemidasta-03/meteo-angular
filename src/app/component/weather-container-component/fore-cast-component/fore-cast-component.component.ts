import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-fore-cast-component',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './fore-cast-component.component.html',
  styleUrl: './fore-cast-component.component.css'
})
export class ForeCastComponentComponent {
  @Input() forecast:any;
}
