import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getAllPost().subscribe((response) => {
      this.posts = response;
      console.log(this.posts)
    });
  }

}