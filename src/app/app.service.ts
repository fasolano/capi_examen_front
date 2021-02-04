import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from './app.models';

@Injectable()
export class AppService {
  constructor(public http: HttpClient) {
  }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('localhost:8000/api/getUsers');
  }
}
