import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablaUsuariosComponent} from './usuarios/tabla-usuarios/tabla-usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: TablaUsuariosComponent, children: [
      {path: '', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
