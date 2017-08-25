import { Component } from '@angular/core';
import {Store, provideStore} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 count$:Observable<any>;
  constructor(private store:Store<any>){
    this.count$ = store.select('counter');
  }
  onIncrement():void{
    console.log('Increment clicked');
    this.store.dispatch({type:INCREMENT})
  }
  onDecrement():void{
    console.log('Decrement clicked');
     this.store.dispatch({type:DECREMENT})
  }
}

export const counter = (state = 0, action ) => {
  console.log('sfsfs'+action.type);
  switch(action.type){
    case INCREMENT: 
     return state + 1;
     case DECREMENT: 
      return state - 1;
      default:
      return state;
  }
}

