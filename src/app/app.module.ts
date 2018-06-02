import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'question/:index', component: QuestionComponent },
  { path: '**', redirectTo: 'question/0' },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ResultsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
