import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController,
    public router: Router) { 

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'apellido': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'repitecontraseña': new FormControl("",Validators.required),

    });

  }


  ngOnInit() {
  }

  async guardar(){
    var reg = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      console.log('El formulario es inválido');
      const alert = await this.alertController.create({
        header: 'Le faltan datos',
        message: 'Llene todos los campos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  
    var usuario = {
      nombre: reg.nombre,
      apellido: reg.apellido,
      correo: reg.correo,
      contraseña: reg.contraseña
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot('login');
  }
  volverLogin(){
    this.router.navigate(['/login']);
  }
}
