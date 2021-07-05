import { Post } from './../models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = "http://localhost:8000/"

  constructor(private httpClient: HttpClient) { }

  getAllPost():Observable<Post[]>{
    let path = this.apiUrl + 'posts/'
    return this.httpClient.get<Post[]>(path);
  }

}
