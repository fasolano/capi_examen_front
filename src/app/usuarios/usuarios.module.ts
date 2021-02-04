import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule
  ]
})
export class UsuariosModule { }
