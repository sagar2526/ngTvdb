import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.scss']
})
export class ShowlistComponent implements OnInit {

 @Input() shows: Object;

  constructor() { }

  ngOnInit() {
  }

}
