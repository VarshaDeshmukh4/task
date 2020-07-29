import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../User';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  address: User[] = [];
  // column = ['Id', 'Name', 'Phone', 'Address'];
  // index = ['Id', 'Name', 'Phone', 'Address'];
  constructor(private appSer: AppService) {}

  ngOnInit(): void {
    this.appSer.getUser().subscribe(res => {
      this.users = res;
    });
  }
  checkPhoneNumber(val) {
    console.log(val);
    if (isNaN(val)) {
      return 'NA';
    } else {
      return val;
    }
  }
}
