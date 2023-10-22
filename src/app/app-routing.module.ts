import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  
  {
    path: 'auto',
    loadChildren: () => import('./auto/auto.module').then( m => m.AutoPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'noauto',
    loadChildren: () => import('./noauto/noauto.module').then( m => m.NoautoPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'contra',
    loadChildren: () => import('./contra/contra.module').then( m => m.ContraPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'listaconductores',
    loadChildren: () => import('./listaconductores/listaconductores.module').then( m => m.ListaconductoresPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule),
    canActivate: [IngresadoGuard]
  },

  

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }