import { Component, signal } from '@angular/core';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table'
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';

import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  imports: [Step2PersonTable, Step3PersonTableInput, Step4ForDirective, Step5EventBind],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public name = "Markos"



// Step 3 input component

person1:Person = {
    firstname: 'User1 name',
    lastname: ' User1 surname',
    email: 'user1@aueb.gr'
  }

  person2: Person = {
    firstname: "User2 name",
    lastname: "User2 surname",
    email: "user2@aueb.gr"
  }
}