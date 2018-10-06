import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../show.service';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.scss']
})
export class HomelistComponent implements OnInit {

  shows: Object;

  constructor(private show: ShowService) { }

  ngOnInit() {
      this.show.getAllShowsFromDb().subscribe((data)=>this.shows = data['data']);
  }

}
