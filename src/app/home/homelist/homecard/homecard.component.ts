import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.scss']
})
export class HomecardComponent implements OnInit {

  @Input('show') showDetails$: Object;

  constructor() { }

  ngOnInit() {
  }

}
