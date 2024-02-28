import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
