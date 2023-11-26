import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),

    });
  }
  

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.correo == f.correo && usuario.contraseña == f.contraseña) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Te faltan datos',
          message: 'Tienes que llenar todos los datos o registrarte',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    }
  }
}


