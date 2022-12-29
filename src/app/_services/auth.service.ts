import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.authUrl;
  constructor(private http:HttpClient) { }

  login(loginModel:any){
    return this.http.post(this.url+'Login',loginModel).pipe(map(user => {
      if(user)
      this.setCurrentUser(user);
    }))
  }

  register(registerModel:any){
    return this.http.post(this.url+'Register',registerModel).pipe(map(user => {
    if(user)
    this.setCurrentUser(user);
  }))
  }

  logOut(){
    this.removeCurrentUser();
  }

  setCurrentUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  removeCurrentUser(){
    localStorage.clear();
  }
}
