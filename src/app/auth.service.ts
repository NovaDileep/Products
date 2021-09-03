import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private loginurl="http://localhost:3300/login";
  constructor(private http:HttpClient) { }
  userlogin(user:any){
    
    return this.http.post<any>(this.loginurl,user);
    
  }
  
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
