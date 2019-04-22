import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
})
export class TrailerComponent implements OnInit {

  constructor(private camera: Camera) { }

  ngOnInit() {
    
  }
  slideChanged(myslider){
    myslider.startAutoplay();
  }
}
