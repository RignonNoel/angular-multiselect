# AngularMultiselect

[![npm version](https://badge.fury.io/js/%40rignonnoel%2Fangular-multiselect.svg)](https://badge.fury.io/js/%40rignonnoel%2Fangular-multiselect)
[![GitHub issues](https://img.shields.io/github/issues/RignonNoel/angular-multiselect.svg)](https://github.com/RignonNoel/angular-multiselect/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/RignonNoel/angular-multiselect/master/LICENSE)

A multiple select component for angular 6.0+ that allow user to manage choices between two list.


## Demo

https://rignonnoel.com/angular-multiselect/

## Getting started

First install through npm:

```
npm install --save @rignonnoel/angular-multiselect
```

Finally import `MultiselectModule` into your app module:

```
import {MultiselectModule} from 'angular-multiselect';

@NgModule({
  imports: [
    MultiselectModule
  ]
})
export class MyModule {}
```

## Example of usage

Here is a little example of usage:

 - We create or get a list of choices
 - We init the component
 - We bind a filter function that will be trigger when user want to filter the list
 
At all time we can use the list of selected choices since this variable is bind to the multiselect.
 
**example.component.ts**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // The list of item in our storage service (ALL the valid choices)
  allChoices = [];

  // The list of choices availables in the multiple select
  choicesAvailable = [];
  
  // The list of choices selected (feel free to populate it to init the multiselect with pre-selected options)
  selectedChoices = [];

  constructor() {
    // You can replace this loop by a call to you storage service to get data from your DB for example.
    for (let index = 0; index <= 200; index++) {
      this.allChoices.push(
        {
          name: 'Choice ' + index.toString(),
        }
      );
    }
    this.choicesAvailable = this.allChoices;
  }

  // Here is the function we trigger each time the user want to filter the list inside the multiselect
  // You can change this logic to just add a filter on the call to your storage service for example.
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
```


**example.component.html**
```html
<multiselect [list]="choicesAvailable"
             [(selected)]="selectedChoices"
             labelProperty="name"
             (searchBar)="filter($event)"
             typeOfSearch='text'>
</multiselect>
```

## Documentation

### Inputs

| Attribut | Description | Type | Default value |
|---|---|---|---|
| list | The list of choices available in the multiselect | any[] | [] |
| selected | The list of selected choices in the multiselect | any[] | [] |
| labelProperty | Attribute name of `list` we want to use as display in the multiselect | string | label |
| settings | General settings of the component, principally use for display configuration | Object | See below |
| typeOfSearch | The type of searchbar you want | 'text', 'datetime', 'datetime-range' | 'text'
### Settings

Here is the default value of the settings, feel free to change it to do some customization or internationalization.
```
{
  searchBarPlaceholder: 'Type here to filter the list..',
  listLabel: 'List of choices',
  listEmptyLabel: 'No choices available',
  selectedLabel: 'Selected choices',
  selectedEmptyLabel: 'No choice selected',
  datetime_range: {
    start: 'Start',
    end: 'End',
  }
}
```

### Outputs

| Attribut | Description | Type | Return |
|---|---|---|---|
| searchBar | Triggered each time the user change the content of the searchBar. This output is triggered after a little time without edition (1~2 seconds) to avoid abusive calculation on filtering | string | The text writed by the user to filter


## How to publish a new official version on npmjs

First create a new build of the package:

```
npm run packagr
```

Finally publish it on npmjs:

```
npm publish dist --access public
```

## License

MIT
