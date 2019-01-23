import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit, OnChanges {

  @Input() labelProperty = 'label';
  @Input() selected: any[] = [];
  @Input() list: any[] = [];
  @Input() settings;
  @Input() typeOfSearch: 'text' | 'datetime' | 'datetime-range' = 'text';

  typingTimer;
  doneTypingInterval = 1500;
  searchBarText: string;

  datetimeStart;
  datetimeEnd;

  @Output() searchBar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.settings) {
      this.settings = {
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
    }
  }

  ngOnChanges() {}

  isSelected(item) {
    const index = this.selected.indexOf(item);
    if (index > -1) {
      return true;
    }
  }

  triggerSearch() {
    if (this.typeOfSearch === 'text') {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(
        () => {
          this.filterList();
        },
        this.doneTypingInterval
      );
    } else {
      this.filterList();
    }
  }

  filterList() {
    if (this.typeOfSearch === 'text') {
      this.searchBar.emit(this.searchBarText);
    } else if (this.typeOfSearch === 'datetime') {
      this.searchBar.emit(this.datetimeStart);
    } else if (this.typeOfSearch === 'datetime-range') {
      this.searchBar.emit(
        {
          start: this.datetimeStart,
          end: this.datetimeEnd,
        }
      );
    }
  }

  select(item) {
    this.selected.push(item);
  }

  unselect(item) {
    const index = this.selected.indexOf(item);
    if (index > -1) {
      this.selected.splice(index, 1);
    }
  }
}
