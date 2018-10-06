import { Component, OnInit, Input } from '@angular/core';
import { ShowService } from '../../../show.service';
@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  result$: Boolean = true;

	@Input('show') showDetails: Object;

  constructor(private show: ShowService) { }

  ngOnInit() {
  }

  addShow(){
    this.show.postShowInMongo(this.showDetails).subscribe((result) => this.result$ = !result['added']); 
  }
}
