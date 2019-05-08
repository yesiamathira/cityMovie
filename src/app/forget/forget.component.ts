import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  CustomerService   from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss'],
})
export class ForgetComponent implements OnInit {
customer={email:'',security_question:'',answer:''};
password;
list=[];

  constructor(public alertController:AlertController,private route: ActivatedRoute,private router :Router, private customerService:CustomerService,private _location: Location)
  { 
    this.customerService.getDBCustomers();
  }

  ngOnInit() {}
  move(){
    this._location.back();
  }
  log(){
this.router.navigate(['/login']);

}
// reset(customer){
// this.customerService.getRemoteCustomers().subscribe((result)=>{this.list=result;});
// for(var i=0;i<this.list.length;i++)

// {
//   if(customer.email==this.list[i].email){
//     this.password=this.list[i].password;
//     console.log(this.password);
//   }
// }

// }

reset(customer){
  this.customerService.getRemoteCustomers().subscribe((result)=>{this.list=result;});
  for(var i=0;i<this.list.length;i++)
  
  {
    if((customer.email==this.list[i].email)&&(customer.security_question==this.list[i].security_question)){
      
      if(customer.answer==this.list[i].answer)
      {
        this.password=this.list[i].password;
        console.log('password successful');
      console.log(this.password);
      }
     else {
      console.log('not successful');
     } 
    }
  }
  
  }




}
