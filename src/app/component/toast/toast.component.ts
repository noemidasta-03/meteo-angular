import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [
    NgIf
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  message:string='';
  isVisible:boolean = false;

  showToast(message:string){
    this.message = message;
    this.isVisible = true;

    setTimeout(()=>{
      this.isVisible = false;
    },3000)
  }
}
