import { Component } from '@angular/core';

@Component({
  selector: 'app-step5-event-bind',
  imports: [],
  templateUrl: './step5-event-bind.html',
  styleUrl: './step5-event-bind.css',
})
export class Step5EventBind {
  times:number = 0;
  userInput: string = '';

  incrementTimes() {
    this.times++;
  }

  decrementTimes(){
    this.times--;
  }

  resetTimes() {
    this.times = 0
  }

  onUserInput(dataInput: Event){
    console.log(">>>", dataInput);
    this.userInput = (<HTMLInputElement>dataInput.target).value;
  }
}