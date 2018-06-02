export class Question {
  selectedAnswerIndex?: number;

  constructor(public number: number,
    public text: string,
    public answers: string[],
    public answerIndex: number) {}
}
