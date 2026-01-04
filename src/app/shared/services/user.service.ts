import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../interfaces/user';
import { IUser, LoggedInUser } from '../interfaces/user';
import { environment } from '../../../environments/environment';


const API_URL = `${environment.apiUrl}/api/users`;
const API_AUTH_URL = `${environment.apiUrl}/api/auth`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http:HttpClient = inject(HttpClient);


loginUser (credentials: Credentials){
    const request = this.http.post<{token:string, user:IUser}>(
      `${API_AUTH_URL}/login`, credentials
    )
    return request
  }



}