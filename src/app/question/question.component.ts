import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Question } from './Question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  nextIndex: number;

  constructor(private questionService: QuestionService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.question = questionService.getQuestion(params.index);
      this.nextIndex = parseInt(params.index, 0) + 1;
    });
  }

  ngOnInit() {
  }

  nextClick() {
    const url = this.nextIndex >= this.questionService.questions.length ?
      'results' : `question/${this.nextIndex}`;
    this.router.navigateByUrl(url);
  }

}
