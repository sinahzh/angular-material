import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/interfaces/login'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }  
    
  public getJSON(){
    return this.http.get("../../assets/users.json");
  }
 
  logout() :void {    
  localStorage.setItem('isLoggedIn','false');    
  localStorage.removeItem('token');    
  }    
}
