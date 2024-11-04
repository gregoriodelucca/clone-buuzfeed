import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getQuizzes().subscribe(data => {
      this.quizzes = data;
    });
  }
}
