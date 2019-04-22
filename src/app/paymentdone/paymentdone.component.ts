import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import {Location} from '@angular/common';
import  CustomerService   from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentdone',
  templateUrl: './paymentdone.component.html',
  styleUrls: ['./paymentdone.component.scss'],
})
export class PaymentdoneComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router :Router, private customerService:CustomerService,private _location: Location) { }

  ngOnInit() {}
  move(){
    this._location.back();
  }
}
