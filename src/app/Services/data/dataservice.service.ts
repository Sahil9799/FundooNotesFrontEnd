import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messageSource = new BehaviorSubject(' ');
  currentMessage = this.messageSource.asObservable();
  private isGrid = new BehaviorSubject(true);
  gridList = this.isGrid.asObservable();
  
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeView(flag: boolean){
    this.isGrid.next(flag)
  }
}
