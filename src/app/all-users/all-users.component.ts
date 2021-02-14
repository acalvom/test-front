import { Component, OnInit } from '@angular/core';
import {UserRESTService} from "../shared/services/UserRESTService";
import { User } from '../shared/models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private connection: UserRESTService) {  }

  allUsers: User[] = [];

  listPersonal(){
    this.connection.getAllPersonal().subscribe(
      (value: User[]) => {
        this.allUsers = value;
        console.log(value);
      }
    );
  }

  ngOnInit(): void {
    this.listPersonal();
  }

}
