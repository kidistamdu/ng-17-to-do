import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { firebaseConfig } from "firebase.config";
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

export const appConfig :ApplicationConfig = {
      providers : [
        importProvidersFrom(
            provideFirebaseApp(() => initializeApp(firebaseConfig)),
            provideFirestore(() => getFirestore()),
            provideStorage(() => getStorage()),
            
        )
        ]
}