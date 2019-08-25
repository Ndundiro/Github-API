import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search-form',
  templateUrl: './input-search-form.component.html',
  styleUrls: ['./input-search-form.component.css']
})
export class InputSearchFormComponent implements OnInit {
  
  @Output() emitSearch = new EventEmitter<any>() 


  searchTerm: string;
  constructor() { }


  search(){
    this.emitSearch.emit(this.searchTerm)
  }

  ngOnInit() {
  }

}
