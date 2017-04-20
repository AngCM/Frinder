import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCS2sSxtc1vJkZ2niNs0y-1KMzjPkbq2wg",
    authDomain: "frinder-48fba.firebaseapp.com",
    databaseURL: "https://frinder-48fba.firebaseio.com",
    storageBucket: "frinder-48fba.appspot.com",
    messagingSenderId: "627720857422"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
