import { DataPosts } from './../models/dataPosts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPost(url: string):Observable<DataPosts>{
    return this.httpClient.get<DataPosts>(url);
  }

}
