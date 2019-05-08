import { Component, OnInit } from '@angular/core';
import CustomerService   from '../customer.service';
@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.scss'],
})
export class ViewbookingComponent implements OnInit {
  booking:any={
    
};
list=[];
  constructor(private customerService: CustomerService) { 
    this.customerService.getDBBookings();
    this.customerService.getRemoteBookings().subscribe((result)=>{this.list=result;});
  }

  ngOnInit() {}

}
