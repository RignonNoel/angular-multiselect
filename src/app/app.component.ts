import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfChoices = [
    {
      name: 'first choice',
    },
    {
      name: 'second choice',
    },
    {
      name: 'third choice',
    }
  ];
  selectedChoices = [];
}
