import { Component, signal } from '@angular/core';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';

@Component({
  selector: 'app-root',
  imports: [Step2PersonTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public name = "Markos"
}
