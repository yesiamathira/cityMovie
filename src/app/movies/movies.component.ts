import { Component, OnInit } from '@angular/core';
import CustomerService   from '../customer.service';
import { Router, NavigationEnd  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movie:any={
    id:'',
    name:"",
    email:"",
    phone:"",
    address:"",
};
list=[];
  constructor(private customerService: CustomerService,private router :Router,private route: ActivatedRoute,private _location: Location) { }

  ngOnInit() {
    this.customerService.getDBMovies();
  this.customerService.getRemoteMovies().subscribe((result)=>{this.list=result;});
  
}
onSelect(movie)
{
  
  localStorage.setItem('movies', JSON.stringify(movie));
var movies = JSON.parse(localStorage.getItem('movies'));
console.log(movies);
  
  this.router.navigate(['./booking/'+movie.id]); 
}
deleteMovie(movie){
  this.customerService.deleteRemoteMovie(movie).subscribe((e)=>{this.customerService.getRemoteMovies().subscribe((result)=>{this.list=result;});});
}

move(){
  this._location.back();
}
}
