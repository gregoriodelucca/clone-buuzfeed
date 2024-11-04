import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
