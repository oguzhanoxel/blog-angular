import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  listPostUrl = "http://localhost:8000/posts/";
  next: string;
  previous: string;
  last: string;
  first: string;
  pageNum: number;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params["search"]) {
        let searchUrl = this.listPostUrl + "?search=" + params["search"]
        this.getAllPost(searchUrl);
      }
      else {
        this.getAllPost(this.listPostUrl);
      }
    });
  }

  getAllPost(url: string) {
    this.postService.getAllPost(url).subscribe((response) => {
      this.posts = response.results;
      this.pageNum = response.page_number;
      this.last = response.last_page;
      this.first = response.first_page;
      if (response.next) {
        this.next = response.next;
      }
      if (response.previous) {
        this.previous = response.previous;
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
    this.next = this.last
    this.getAllPost(this.last)
  }

  firstPage() {
    this.previous = this.first
    this.getAllPost(this.first)
  }
}
