import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  score: number;

  constructor(private questionService: QuestionService, private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.params.subscribe(() => {
      this.score = this.questionService.calculateScore();
    });
  }

  ngOnInit() {
  }

  reset() {
    this.questionService.resetQuestions();
    this.router.navigateByUrl('question/0');
  }

}
