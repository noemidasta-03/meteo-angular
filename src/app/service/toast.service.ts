import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  getToast(message:string): Observable<string> {
    return new Observable<string>((observer )=>{
      observer.next(message);
      observer.complete();
    })
  }
}
