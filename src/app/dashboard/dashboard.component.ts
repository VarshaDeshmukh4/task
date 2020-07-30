import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../User';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  address: User[] = [];
  searchString: string;
  dashboradarray = {
    data: [
      {
        id: 1,
        name: 'Jhon',
        phone: '9999999999',
        address: {
          city: 'Pune',
          address_line1: 'ABC road',
          address_line2: 'XYZ building',
          postal_code: '12455'
        }
      },
      {
        id: 2,
        name: 'Jacob',
        phone: 'AZ99A99PQ9',
        address: {
          city: 'Pune',
          address_line1: 'PQR road',
          address_line2: 'ABC building',
          postal_code: '13455'
        }
      },
      {
        id: 3,
        name: 'Ari',
        phone: '145458522',
        address: {
          city: 'Mumbai',
          address_line1: 'ABC road',
          address_line2: 'XYZ building',
          postal_code: '12455'
        }
      }
    ]
  };
  indexId: any;
  constructor(private appSer: AppService, private route: Router) {
    this.users = this.appSer.test;
  }

  name: string = '';
  ngOnInit(): void {
    if (this.appSer.test.length !== 0) {
      this.dashboradarray.data = [
        ...this.dashboradarray.data,
        ...this.appSer.test
      ];
    }
  }

  checkPhoneNumber(val) {
    //console.log(val);
    if (isNaN(val)) {
      return 'NA';
    } else {
      return val;
    }
  }
  redirectToAddData() {
    this.route.navigate(['/employees/add']);
  }
  editData(val1, val2) {
    const data = Object.assign(val1, val2);
    this.route.navigate(['/employees/add', data]);
  }
}
