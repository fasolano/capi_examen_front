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

  public users: Observable<User[]>;
  constructor(public appService: AppService) { }
  ngOnInit() {
    this.getUsers();
  }
  private getUsers() {
    this.users = this.appService.getUsers();
  }
}
