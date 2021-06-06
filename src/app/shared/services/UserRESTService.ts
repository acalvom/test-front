import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserRESTService {
  // private baseurl = 'http://localhost:8000';
  private baseurl = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getAllPersonal() {
    return this.http.get(this.baseurl + '/personal');
  }
}
