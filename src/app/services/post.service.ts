import { DataPosts } from './../models/dataPosts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = environment.apiUrl + "posts/"

  constructor(private httpClient: HttpClient) { }

  getAllPost(url: string): Observable<DataPosts> {
    return this.httpClient.get<DataPosts>(url);
  }

  getPost(postId: number): Observable<Post> {
    let url = this.apiUrl + postId;
    return this.httpClient.get<Post>(url);
  }

}
