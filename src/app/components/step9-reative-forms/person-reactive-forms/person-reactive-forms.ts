import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-person-reactive-forms',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './person-reactive-forms.html',
  styleUrl: './person-reactive-forms.css',
})
export class PersonReactiveForms {

  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

 onSubmit(){
    console.log(this.form.value)
  }

  onSetValue(){
    this.form.setValue({
      firstname:"lakis",
      lastname:"lalakis",
      email:"lakis@aueb.gr"
    })
  }


  
}