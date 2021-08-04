import { Token } from './../models/token';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Register } from '../models/register';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl + "auth/"

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(login: Login): Observable<Token> {
    let url = this.apiUrl + "login/";
    return this.httpClient.post<Token>(url, login);
  }
  
  register(register: Register): Observable<User> {
    let url = this.apiUrl + "register/";
    return this.httpClient.post<User>(url, register);
  }

  isAuthenticated(){
    if(this.tokenService.getTokenAccess()){
      return true;
    }else{
      return false;
    }
  }
}
