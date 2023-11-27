import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuario: any;

  constructor(public navCtrl: NavController,
    public alertController : AlertController) { }

  ngOnInit() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
      // Ahora puedes acceder a las propiedades específicas del objeto de usuario
      const nombre = this.usuario.nombre;
      const correo = this.usuario.correo;
      console.log('Nombre del usuario:', nombre);
      console.log('Email del usuario:', correo);
  }
}

  user = localStorage.getItem('usuario')
  


  
  async cerrar() {
        const alert = await this.alertController.create({
          header: 'cerrar sesión',
          message: '¿ya te vas?',
          buttons: [
            {
              text:'no',
              handler:() => {
              }
          },{
            text:'si',
              handler:() => {
                localStorage.removeItem('ingresado');
                this.navCtrl.navigateRoot('login');
            }
          }
        ]
        });

        await alert.present();
      }
    }

