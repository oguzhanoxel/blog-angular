import { DataPosts } from './../../models/dataPosts';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getAllPost().subscribe((response) => {
      this.posts = response.results;
      console.log(this.posts)
    });
  }

}
