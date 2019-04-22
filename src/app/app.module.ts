import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule }    from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgetComponent} from './forget/forget.component';
import {MoviesComponent} from './movies/movies.component';
import {OfferComponent} from './offer/offer.component';
import {PaymentComponent} from './payment/payment.component';
import {BookingComponent} from './booking/booking.component';
import {AddmovieComponent} from './addmovie/Addmovie.component';
import { TrailerComponent} from './trailer/trailer.component';
import { Camera } from '@ionic-native/camera/ngx';
import { PaymentdoneComponent} from './paymentdone/paymentdone.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,AddmovieComponent,LoginComponent,MoviesComponent,TrailerComponent,RegisterComponent,ForgetComponent,BookingComponent,PaymentComponent,OfferComponent,PaymentdoneComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
