import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { PublicFooterComponent } from './layouts/footer/footer.component';
import { PublicHeaderComponent } from './layouts/header/header.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AdminDataTableComponent } from "../admin/views/elements/data-table/data-table.component";

@NgModule({
    declarations: [PublicComponent, HomeComponent],
    imports: [
        CommonModule,
        PublicRoutingModule,
        AuthModule,
        PublicHeaderComponent,
        PublicFooterComponent,
        RouterOutlet,
        AdminDataTableComponent
    ]
})
export class PublicModule {}
