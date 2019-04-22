import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private movieUrl = 'http://localhost:3000/api/movies';
  private customerUrl = 'http://localhost:3000/api/customers';
  private bookingUrl = 'http://localhost:3000/api/bookings';

  constructor(private router :Router, private http: HttpClient) { }
  customers = [];
  movies = [];
  getRemoteCustomers(): Observable<[]>{
    return this.http.get<[]>(this.customerUrl); 		
  }
  addRemoteCustomer(customer):Observable<any>{
    return this.http.post(this.customerUrl,customer);
  }
  deleteRemoteCustomer(customer){
    return this.http.delete(this.customerUrl+"/"+customer.id); 		
  }
  getDBCustomers (){
    this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }
  getRemoteCustomerById(id):Observable<any>{
    return this.http.get<[]>(this.customerUrl + "/"+id);
  }
  updateRemoteCustomer(customer):Observable<any>{
    return this.http.put(this.customerUrl + "/"+customer.id,customer);
  }
  getRemoteMovies(): Observable<[]>{
    return this.http.get<[]>(this.movieUrl); 		
  }
  deleteRemoteMovie(movie){
    return this.http.delete(this.movieUrl+"/"+movie.id); 		
  }
  getDBMovies (){
    this.http.get<[]>(this.movieUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }
  getRemoteMovieById(id):Observable<any>{
    return this.http.get<[]>(this.movieUrl + "/"+id);
  }
  addRemoteMovie(movie):Observable<any>{
    return this.http.post(this.movieUrl,movie);
  }
  updateRemoteMovie(movie):Observable<any>{
    return this.http.put(this.movieUrl + "/"+movie.id,movie);
  }
  bookings = [];
  getRemoteBookings(): Observable<[]>{
    return this.http.get<[]>(this.bookingUrl); 		
  }
  addRemoteBooking(booking):Observable<any>{
    return this.http.post(this.bookingUrl,booking);
  }
  deleteRemoteBooking(booking){
    return this.http.delete(this.bookingUrl+"/"+booking.id); 		
  }
  getDBBookings (){
    this.http.get<[]>(this.bookingUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }
  getRemoteBookingById(id):Observable<any>{
    return this.http.get<[]>(this.bookingUrl + "/"+id);
  }
  updateRemoteBooking(booking):Observable<any>{
    return this.http.put(this.bookingUrl + "/"+booking.id,booking);
  }
}
