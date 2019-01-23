import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allChoices = [];

  choicesAvailable = [];
  selectedChoices = [];

  demo1;
  demo1ChoicesAvailable = [];
  demo1SelectedChoices = [];

  demo2;
  demo2ChoicesAvailable = [];
  demo2SelectedChoices = [];

  constructor() {
    for (let index = 0; index <= 200; index++) {
      this.allChoices.push(
        {
          name: 'Choice ' + index.toString(),
        }
      );
    }
    this.choicesAvailable = this.allChoices;
    this.demo1ChoicesAvailable = this.allChoices;
    this.demo2ChoicesAvailable = this.allChoices;
  }

  filter(search) {
    console.log(search);
    if (search != '') {
      this.choicesAvailable = [];
      for (const item of this.allChoices) {
        if (item.name.indexOf(search) >= 0) {
          this.choicesAvailable.push(item);
        }
      }
    } else {
      this.choicesAvailable = this.allChoices;
    }
  }

  setDemo1(value) {
    this.demo1 = value;
  }

  setDemo2(value) {
    this.demo2 = value;
  }
}
