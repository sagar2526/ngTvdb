import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

	@Output() searchTermChanged: EventEmitter<Object> = new EventEmitter<Object>();
	shows$: Object;
	showName: String

  constructor() { }

  ngOnInit() {
  }

  searchShow(){
    this.searchTermChanged.emit({showName: this.showName}); 
  }

}
