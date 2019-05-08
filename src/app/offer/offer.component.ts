import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import  CustomerService   from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router :Router, private customerService:CustomerService,private _location: Location) { }

  ngOnInit() {}
// cameraOp(){
//   const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.FILE_URI,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE
//   }
  
//   this.camera.getPicture(options).then((imageData) => {
//    // imageData is either a base64 encoded string or a file URI
//    // If it's base64 (DATA_URL):
//    let base64Image = 'data:image/jpeg;base64,' + imageData;
//   }, (err) => {
//    // Handle error
//   });
// }
move(){
  this._location.back();
}
}
