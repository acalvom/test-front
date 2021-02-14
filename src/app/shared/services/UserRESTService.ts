import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserRESTService {
  private baseurl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllPersonal() {
    return this.http.get(this.baseurl + '/personal');
  }
}
