import { Component } from '@angular/core';

@Component({
  selector: 'app-step2-person-table',
  imports: [],
  templateUrl: './step2-person-table.html',
  styleUrl: './step2-person-table.css',
})
export class Step2PersonTable {

  user = {

    firstname: "Bob",
    lastname: "Dylan",
    email: "bob.dylan@aueb.gr"
  }

}
