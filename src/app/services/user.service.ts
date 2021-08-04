import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl + "users/"

  constructor(private httpClient: HttpClient) { }

  retrieveUser(username:string):Observable<User>{
    let url = this.apiUrl + username
    return this.httpClient.get<User>(url);
  }
}
