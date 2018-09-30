import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [ShowService]
})
export class AddComponent implements OnInit {

  isDisabled: Boolean = true;
  showName: String;
  shows$: Object;	

  constructor(private show: ShowService) {}

  	/*search() {
         console.log('searching');
         console.log(this.show)
         this.show.getShowList(this.showName).subscribe((data)=>{ this.shows$ = data.data });

      }*/

      updateSearch(event){
        
        this.show.getShowList(event.showName).subscribe((data)=> this.shows$ = data['data']);
      }

  ngOnInit() {
  }

}
