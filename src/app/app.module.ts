import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { MemoryData } from './auth/memory-data';
import { ItemDestinationPipe } from './pipe/item-destination.pipe';
import { ItemStartDatePipe } from './pipe/item-start-date.pipe';
import { ItemEndDatePipe } from './pipe/item-end-date.pipe';
import { ItemMinPricePipe } from './pipe/item-min-price.pipe';
import { ItemMaxPricePipe } from './pipe/item-max-price.pipe';
import { ItemMinRatingPipe } from './pipe/item-min-rating.pipe';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ItemsComponent,
    ItemDetailsComponent,
    LandingComponent,
    ContactComponent,
    OfferComponent,
    AboutComponent,
    OrderComponent,
    OrderItemComponent,
    ItemDestinationPipe,
    ItemDetailsComponent,
    ItemStartDatePipe,
    ItemEndDatePipe,
    ItemMaxPricePipe,
    ItemMinPricePipe,
    ItemMinRatingPipe,
    NewItemComponent,
    ItemComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryData, {dataEncapsulation: false}),
    ReactiveFormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
