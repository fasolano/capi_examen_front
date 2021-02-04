import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {User} from '../../app.models';
import {MatTableModule} from '@angular/material';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  public displayedColumns: string[] = ['nombre', 'fechaNacimiento', 'edad', 'domicilio'];
  public users: User[] = [];
  constructor(public appService: AppService) { }
  ngOnInit() {
    this.getUsers();
  }
  private getUsers() {
    this.appService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
