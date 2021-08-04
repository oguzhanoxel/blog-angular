import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getPost(params["postId"]);
    });
  }

  getPost(postId:number){
    this.postService.getPost(postId).subscribe((response) =>{
      this.post = response;
    });
  }

}
