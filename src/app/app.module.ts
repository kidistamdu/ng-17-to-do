import { AngularFireAuth } from './../../node_modules/@angular/fire/compat/auth/auth.d';
import { initializeApp } from '@angular/fire/app';
import {NgModule, importProvidersFrom} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PublicModule} from './public/public.module';
import {StrategyProviders} from "./_core/strategies/strategy.providers";
import { firebaseConfig } from "firebase.config";
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireAuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ModalModule.forRoot()
    // AngularFireModule.initializeApp()
  ],
  providers: [
    StrategyProviders,
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()), 
 ),   

 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
