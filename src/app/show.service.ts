import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { AccountModel } from './account.model'

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShowService {

  accounts: AccountModel;

  constructor(private http: HttpClient) {
    this.accounts={
    	name: "sagar",
    	id: 123,
    	age: 24
    }

   }

  getShowList(term){
  	
	return this.http.get('http://localhost:3000/api/tvdb?search='+ term)
	/*.map(function (data){
		console.log(data)
        return data
	})*/
   
}
postShowInMongo(data){
  return this.http.post('http://localhost:3000/api/add/dbShows', data)
}

getAllShowsFromDb(){
  return this.http.get('http://localhost:3000/api/shows')
}

 getAccountDetails(){
  	return this.accounts
  }

 setAccountDetails(name: String, age: Number, id: Number){
   this.accounts['name']= name;
   this.accounts['age']= age;
   this.accounts['id']= id;
 }

}

