import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormArray,FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css']
})
export class FilterDropdownComponent implements OnInit {
  @Input() dataSet: any;
  @Input() searchText: string;  
  @Input() maxLen: number;
  @Output() typeahead: EventEmitter<any> = new EventEmitter();
  filterSet: any;
  isVisible: boolean;
  isCursorOverFilterSet: boolean;
  isArryDataSet: boolean; 
  constructor() { 
    this.dataSet = this.dataSet || [];
    this.searchText = this.searchText || '';
    this.maxLen = this.maxLen || 5;
    this.filterSet = [];
    this.isVisible = false;
  }

  ngOnInit() {
    console.log()
  }
  onSearch(event: any) {          
    if(this.searchText.length > 0) {
      this.filterSet = this.dataSet.filter((item) => {        
          return item
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) > -1        
      });

      this.filterSet = this.filterSet.slice(0, this.maxLen);
      this.showList();
    } else {
      this.filterSet = [];
    }
    
  }

  hideList() {
    if(this.isCursorOverFilterSet != true) {
      this.isVisible = false;
    }    
  }

  showList() {
    if(this.searchText.length > 0){
      this.isVisible = true;
    }
  }

  cursorOverSet() {
    this.showList();
    this.isCursorOverFilterSet = true;
  }

  setValue(value: any) {
    this.searchText = value;
    this.filterSet = [];    
    this.filterSet.push(value);
    this.isCursorOverFilterSet = false;
    this.hideList();
    this.typeahead.emit(this.searchText);
  }

}
