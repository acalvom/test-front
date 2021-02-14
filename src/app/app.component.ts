import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';
import { UserRESTService} from './shared/services/UserRESTService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testFront';
  allUsers: User[] = [];

  constructor(private connection: UserRESTService) {  }

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
