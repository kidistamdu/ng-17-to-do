import { AngularFireAuth } from './../../node_modules/@angular/fire/compat/auth/auth.d';
import { initializeApp } from '@angular/fire/app';
import {NgModule, importProvidersFrom} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PublicModule} from './public/public.module';

import {httpInterceptorProviders} from './_core/interceptors/interceptors.provider';
import {StrategyProviders} from "./_core/strategies/strategy.providers";
import {UtilsProviders} from "./shared/utils/utils.providers";
import { provideRouter } from "@angular/router";
import { firebaseConfig } from "firebase.config";
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    PublicModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireAuthModule
    // AngularFireModule.initializeApp()
  ],
  providers: [
    httpInterceptorProviders,
    StrategyProviders,
    UtilsProviders,
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      
 ) ],
  bootstrap: [AppComponent]
})
export class AppModule { }
