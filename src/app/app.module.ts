import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FireDataServiceProvider } from '../providers/fire-data-service/fire-data-service';
import { RestaurantPage } from '../pages/restaurant/restaurant';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCIhE3ib2j926xLPDb2bdvH3g0g8s1Cv7Q",
  authDomain: "c09-les.firebaseapp.com",
  databaseURL: "https://c09-les.firebaseio.com",
  projectId: "c09-les",
  storageBucket: "",
  messagingSenderId: "854996442772"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RestaurantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FireDataServiceProvider,
    Camera
  ]
})
export class AppModule {}
