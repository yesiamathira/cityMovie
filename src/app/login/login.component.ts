import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customer:any={
   
    name:"",
    password:'',
    address:"",
    email:"",
    phone:""
    
};
customers: any = [
  // {id:1, name:'kritika',password:'12344',address:"India",email:'kritikaroy@gmail.com', phone:'09038187690'},
  // {id:2, name:'Ashish',password:'12345',address:"India",email:'ashishroy@gmail.com',phone:'09038187691' }
]
list=[];
constructor(private customerService: CustomerService,private router :Router) {
  this.customerService.getDBCustomers();
 }

  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result)=>{this.list=result;});

  }
 
  // doLogin(customer){
  //   for(var i=0;i<this.list.length;i++)
  //   {
  //     if((customer.email===this.list[i].email)&&(customer.password===this.list[i].password))
  //     {
  //       this.router.navigate(['/movies']);
  //     }
  //     else{
  //      console.log("Login Failed");
  //     }
  //   }
  // }

  doLogin(customer){
      for(var i=0;i<this.list.length;i++)
      {
        if((customer.email===this.list[i].email)&&(customer.password===this.list[i].password))
        {
         this.customer.id=this.list[i].id;
         this.customer.email=this.list[i].email;
         this.customer.password=this.list[i].password
         localStorage.setItem('users',JSON.stringify(this.customer));
         this.customer=JSON.parse(localStorage.getItem('users'))
      console.log(customer);

          this.router.navigate(['/movies']);
          break;
        }
        else{
         console.log("Login Failed");
        }
      }
    }
  


}
