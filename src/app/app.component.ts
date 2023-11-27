// app.component.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private isAuthenticated = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.checkAuthentication();
  }

  private checkAuthentication() {
    if (!this.isAuthenticated) {
      this.navCtrl.navigateRoot('/login');
    }
  }

  setAuthenticationStatus(value: boolean): void {
    this.isAuthenticated = value;
  }
}
