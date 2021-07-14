import { DataPosts } from './../models/dataPosts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = "http://localhost:8000/";

  constructor(private httpClient: HttpClient) { }

  getAllPost(url: string):Observable<DataPosts>{
    return this.httpClient.get<DataPosts>(url);
  }

  getPost(postId:number):Observable<Post>{
    let url = this.apiUrl + "posts/" + postId;
    return this.httpClient.get<Post>(url);
  }

}
