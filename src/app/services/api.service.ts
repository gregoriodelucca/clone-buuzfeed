import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL de exemplo
  private quizzesUrl = 'assets/quizzes.json'; // arquivo JSON local para quizzes

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizzesUrl);
  }
}
