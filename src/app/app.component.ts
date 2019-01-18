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

  constructor() {
    for (let index = 0; index <= 200; index++) {
      this.allChoices.push(
        {
          name: 'Choice ' + index.toString(),
        }
      );
    }
    this.choicesAvailable = this.allChoices;
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
}
