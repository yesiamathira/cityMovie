// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import  CustomerService   from '../customer.service';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.scss'],
// })
// export class BookingComponent implements OnInit {
//   booking:any={
//    customer_id:"",
//     tickets:"",
//     movie_id:"",
//     movie_name:"",
//     movie_time:"",
//     theatre:'',
//     screen:"",
//     city:"",
//     movie_date:"",
//     date:"",
//     amount:"",
//     ticket_price:"",

// };

// list=[];
//   constructor(private route: ActivatedRoute,private router :Router, private customerService:CustomerService)
  
//   {  
//     }
 
//     id: number;
//     private sub: any;
 
//   ngOnInit() {
  
//   this.customerService.getDBBookings();
//   this.customerService.getRemoteBookings().subscribe((result)=>{this.list=result;});

  
// }

// addBooking(booking){
//   this.customerService.addRemoteBooking(this.booking).subscribe(()=>{this.router.navigate(['/movies']);});
// }

//   updateBooking(){
//     this.customerService.updateRemoteBooking(this.booking).subscribe(()=>{this.router.navigate(['movies']);});
//   }  



// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  CustomerService   from '../customer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  customerId= JSON.parse(localStorage.getItem('users'));
movieL=JSON.parse(localStorage.getItem('movies'));
booking:{customer_id:number,tickets:number,movie_id:number,movie_name:string,movie_time:any,theatre:string,screen:string,city:string,movie_date:any,date:any,amount:number,ticket_price:number};

movie:any;
numbers :number ;

id:number;
private sub: any;
  constructor(private route: ActivatedRoute,private router :Router, private customerService:CustomerService) {  
        this.booking={customer_id:this.customerId.id,tickets:0,movie_id:this.movieL.id,movie_name:this.movieL.name,movie_time:'',theatre:'Vox Cinemas',screen:'Screen 3',city:'Bangalore',movie_date:'',date:'',amount:0,ticket_price:200}
        // this.booking={customer_id:'customerId.id',tickets:'',movie_id:'this.movie.id',movie_name:'this.movie.name',movie_time:'',theatre:'',screen:'',city:'',movie_date:'',date:'',amount:'',ticket_price:''};
  }
 addBookings()
 {
  var books:any = {customer_id:this.customerId.id,tickets:this.booking.tickets,movie_id:this.movie.id,movie_name:this.movie.name,movie_time:this.booking.movie_time,theatre:'Tulsi',screen:'Screen 2',city:'Bangalore',movie_date:this.booking.movie_date,date:this.booking.date,amount:this.booking.amount,ticket_price:this.booking.ticket_price};
   var price:any = this.booking.tickets*this.booking.ticket_price;
  //  *books.amount;
   localStorage.setItem('price',JSON.stringify(price));
   console.log(books);
   console.log(price);
   this.customerService.addRemoteBooking(books).subscribe(()=>{ this.router.navigate(['payment/'+price]);});

 } 
  ngOnInit() {

    this.movie={name:"",year:"",image_url:"",production_house:"",rating:"",type:"",language:"",date:""};
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       console.log(this.id); // (+) converts string 'id' to a number
       this.customerService.getRemoteMovieById(this.id).subscribe((movie)=>{this.movie = movie;});

    });
  }

}

