import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  paramsData: any;
  constructor(
    private fb: FormBuilder,
    private appSer: AppService,
    private activateRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]
      ],
      city: ['', Validators.required],
      address_line1: ['', Validators.required],
      address_line2: ['', Validators.required],
      postal_code: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.getParams();
    if (this.paramsData['id']) {
      this.editForm();
    }
  }
  get f() {
    return this.myForm.controls;
  }
  addForm() {
    this.submitted = true;
    if (this.myForm.value === '' && this.myForm.invalid) {
      return;
    } else {
      const data = {};
      if (this.paramsData['id']) {
        data['id'] = this.paramsData['id'];
      } else {
        data['id'] = '';
      }
      data['name'] = this.myForm.value.name;
      data['phone'] = this.myForm.value.phone;
      data['address'] = {
        city: this.myForm.value.city,
        address_line1: this.myForm.value.address_line1,
        address_line2: this.myForm.value.address_line2,
        postal_code: this.myForm.value.postal_code
      };
      this.appSer.test.push(data);
      this.myForm.reset();
    }
  }
  getParams() {
    // catch route data
    this.activateRoute.paramMap.subscribe(value => {
      this.paramsData = value['params'];
    });
  }
  editForm() {
    console.log(this.paramsData);
    this.myForm.get('name').setValue(this.paramsData.name);
    this.myForm.get('phone').setValue(this.paramsData.phone);
    this.myForm.get('city').setValue(this.paramsData.city);
    this.myForm.get('address_line1').setValue(this.paramsData.address_line1);
    this.myForm.get('address_line2').setValue(this.paramsData.address_line2);
    this.myForm.get('postal_code').setValue(this.paramsData.postal_code);
  }
}
