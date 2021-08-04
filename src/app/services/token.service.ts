import { Injectable } from '@angular/core';
import { Token } from '../models/token';

const TOKEN_ACCESS_KEY = 'token-access';
const TOKEN_REFRESH_KEY = 'token-refresh'
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  logout(): void {
    sessionStorage.clear();
  }

  public saveTokenAccess(token_access: string):void {
    sessionStorage.removeItem(TOKEN_ACCESS_KEY);
    sessionStorage.setItem(TOKEN_ACCESS_KEY, token_access);
  }

  public getTokenAccess():string | null {
    return sessionStorage.getItem(TOKEN_ACCESS_KEY);
  }

  public saveTokenRefresh(token_refresh: string):void {
    sessionStorage.removeItem(TOKEN_REFRESH_KEY);
    sessionStorage.setItem(TOKEN_REFRESH_KEY, token_refresh);
  }

  public getTokenRefresh():string | null {
    return sessionStorage.getItem(TOKEN_REFRESH_KEY);
  }

  public saveUser(user: any): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    
    return {};
  }
}
