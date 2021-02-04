import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsuariosModule { }
