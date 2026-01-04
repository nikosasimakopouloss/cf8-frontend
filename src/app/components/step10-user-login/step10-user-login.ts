import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { MatFormField, MatLabel, MatError, MatInput } from "@angular/material/input";
import { MatAnchor } from '@angular/material/button';
import { Credentials } from '../../shared/interfaces/user';

@Component({
  selector: 'app-step10-user-login',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatError, MatInput, MatAnchor],
  templateUrl: './step10-user-login.html',
  styleUrl: './step10-user-login.css',
})
export class Step10UserLogin {

  userService = inject(UserService);

  invalidLogin: boolean = false;



  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)


})

onSubmit(){
    console.log(this.form.value);
    this.userService.loginUser(this.form.value as Credentials)
    .subscribe(response => {

      console.log (response);

    })

}





}
