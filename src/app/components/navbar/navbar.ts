import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

userService = inject(UserService);

  user = this.userService.user;

logout(){
    this.userService.logoutUser();
  }

}


