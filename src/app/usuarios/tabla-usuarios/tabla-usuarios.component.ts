import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {User} from '../../app.models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  public users = [];
  constructor(public appService: AppService) { }
  ngOnInit() {
    this.getUsers();
  }
  private getUsers() {
    this.appService.getUsers().subscribe(data => {
      this.users = data;
    });
    console.log(this.users[0]);
  }
}
