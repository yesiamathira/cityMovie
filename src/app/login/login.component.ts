import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customer:any={};
message;
list=[];
constructor(private customerService: CustomerService,private router :Router) {
   this.customerService.getDBCustomers();
 }

  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result)=>{this.list=result;console.log(this.list)});

  }
 
  doLogin(customer){
    for(var i=0;i<this.list.length;i++)
    {
      if((customer.email===this.list[i].email)&&(customer.password===this.list[i].password))
      {customer.id=this.list[i].id;
        customer.email=this.list[i].email;
        customer.password=this.list[i].password;
        localStorage.setItem('users',JSON.stringify(this.customer));
        this.customer=JSON.parse(localStorage.getItem('users'));
        console.log("User Data from local storage->"+customer);
        console.log("Data inside locaStorage->"+ JSON.stringify(this.customer));
        this.message='';
        this.router.navigate(['/movies']);
      }
      else{
       console.log("Login Failed");
       this.message='Login failed,check your password';
      }
    }
  }

  // doLogin(customer){
  //     for(var i=0;i<this.list.length;i++)
  //     {
  //       if((customer.email==this.list[i].email)&&(customer.password==this.list[i].password))
  //       {
  //       customer.id=this.list[i].id;
  //        customer.email=this.list[i].email;
  //        customer.password=this.list[i].password
  //        localStorage.setItem('users',JSON.stringify(this.customer));
  //        this.customer=JSON.parse(localStorage.getItem('users'))
  //     console.log(customer);

  //         this.message='';
  //         break;
  //       }
  //       else{
  //        console.log("Login Failed");
  //        this.message='Login failed,check your password';
         
  //       }
  //     }
  //   }
  


}
