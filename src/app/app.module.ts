import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SortPipe } from './sort.pipe';



export const firebaseConfig = {
  apiKey: "AIzaSyDQC5SAcxwOWhQ-JX-HeHsWVGLRdB6TCOI",
  authDomain: "toecapp-253bb.firebaseapp.com",
  projectId: "toecapp-253bb",
  storageBucket: "toecapp-253bb.appspot.com",
  messagingSenderId: "781975762518",
  appId: "1:781975762518:web:0e890589329ac409742df7",
  measurementId: "G-D8X55SF3KN"
};

@NgModule({
  declarations: [AppComponent, SortPipe],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

