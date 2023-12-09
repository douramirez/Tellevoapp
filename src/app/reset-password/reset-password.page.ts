import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importar AlertController

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email: string = '';
  newPassword: string = '';
  constructor(private router:Router, public alertController:AlertController) { }

  ngOnInit() {
  }

  async onSubmit() {
    // Comprobar si los campos de correo electrónico y contraseña están vacíos
    if (!this.email || !this.newPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellene ambos campos.',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
  
    // Recoger el valor del correo electrónico y la nueva contraseña
    const email = this.email;
    const newPassword = this.newPassword;
  
    // Buscar el usuario en el almacenamiento local
    const userStr = localStorage.getItem('usuario');
    if (!userStr) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se encontró ningún usuario con ese correo electrónico.',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
  
    const user = JSON.parse(userStr);
  
    // Si el usuario existe y el correo electrónico coincide, actualizar su contraseña
    if (user.correo === email) {
      user.contraseña = newPassword;
      localStorage.setItem('usuario', JSON.stringify(user));
      console.log(`Password for email: ${email} has been reset.`);
      
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se encontró ningún usuario con ese correo electrónico.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }

  volverLogin(){
    this.router.navigate(['/login']);
  }

}
