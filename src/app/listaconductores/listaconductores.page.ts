import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface RandomUser {
  results: RandomUserData[];
}

export interface RandomUserData {
  name: {
    first: string;
    last: string;
  };
  location: {
    city:string
    country:string
  }
  email: string;
  phone: string;
  
  picture: {
    large: string;
  };
  // Otras propiedades del usuario
}

@Component({
  selector: 'app-listaconductores',
  templateUrl: './listaconductores.page.html',
  styleUrls: ['./listaconductores.page.scss'],
})
export class ListaconductoresPage {

  users: RandomUserData[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<RandomUser>('https://randomuser.me/api/?results=10')
      .subscribe(res => {
        console.log(res);
        this.users = res.results;
      });
  }

  showUserDetails(user: RandomUserData) {
    if (user) {
      this.router.navigate(['user-detail', { user: JSON.stringify(user) }]);
    }
  }
}