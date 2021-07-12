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
  listPostUrl = "http://localhost:8000/posts/";
  next: string;
  isNext: boolean = false;
  previous: string;
  isPrevious: boolean = false;
  last: string;
  first: string;
  pageNum: number;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getAllPost(this.listPostUrl);
  }

  getAllPost(url: string){
    this.postService.getAllPost(url).subscribe((response) => {
      this.posts = response.results;
      this.pageNum = response.page_number;
      this.last = response.last_page;
      this.first = response.first_page;
      if (response.next) {
        this.next = response.next;
        this.isNext = true;
      }
      if (response.previous) {
        this.previous = response.previous;
        this.isPrevious = true;
      }
    });
  }

  nextPage() {
    this.getAllPost(this.next)
  }

  previousPage() {
    this.getAllPost(this.previous)
  }

  lastPage() {
    this.getAllPost(this.last)
  }

  firstPage() {
    this.getAllPost(this.first)
  }
}
