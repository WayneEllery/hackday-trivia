import { Injectable } from '@angular/core';
import { Question } from './question/Question';
import questions from './questions';
import Chance from 'chance';
const chance = new Chance();

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[];
  constructor() {
    this.resetQuestions();
  }

  getQuestion = (index): Question => this.questions[index];

  calculateScore = (): number => {
    return this.questions.reduce((score, qn) => {
      return qn.selectedAnswerIndex === qn.answerIndex ? score + 1 : score;
    }, 0);
  }

  resetQuestions() {
    const randomIndexes = chance.unique(chance.natural, 10, {min: 0, max: 12});
    const randomQns = randomIndexes.map((i, index) => ( { ...questions[i], number: index + 1 } ));
    this.questions = randomQns;
  }
}
