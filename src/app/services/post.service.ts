import { DataPosts } from './../models/dataPosts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = "http://localhost:8000/"

  constructor(private httpClient: HttpClient) { }

  getAllPost():Observable<DataPosts>{
    let path = this.apiUrl + 'posts/'
    return this.httpClient.get<DataPosts>(path);
  }

}
