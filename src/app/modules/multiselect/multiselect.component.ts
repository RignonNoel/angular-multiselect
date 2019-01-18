import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit, OnChanges {

  @Input() labelProperty = 'label';
  @Input() valueProperty = 'value';
  @Input() selected: any[] = [];
  @Input() list: any[] = [];
  @Input() settings;

  typingTimer;
  doneTypingInterval = 1500;
  searchBarText: string;

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
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(
      () => {
        this.filterList();
      },
      this.doneTypingInterval
    );
  }

  filterList() {
    this.searchBar.emit(this.searchBarText);
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
