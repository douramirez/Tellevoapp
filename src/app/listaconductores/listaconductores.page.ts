import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listaconductores',
  templateUrl: './listaconductores.page.html',
  styleUrls: ['./listaconductores.page.scss'],
})
export class ListaconductoresPage {


  constructor(private api:ApiService, private router:Router) { }

  public conductor: any
  ngOnInit() {
    this.api.getConductor().subscribe(
      (data) => {
      console.log(data);
      this.conductor = data.results;
      localStorage.setItem('Conductor', JSON.stringify(data.results));
    });
  }

  showUserDetails(conductor: any) {
    if (conductor) {
      this.router.navigate(['user-detail', { user: JSON.stringify(conductor) }]);
    }
  }

  
}