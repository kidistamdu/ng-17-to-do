import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from 'src/app/_core/services/common.service';
import { AdminRoutes } from 'src/app/admin/admin.routes';
import { AppRoutes } from 'src/app/app.routes';
import { Images } from 'src/assets/data/images';
import { PublicRoutes } from '../../public.routes';
import { AdminModalComponent } from "../../../admin/views/elements/modal/admin-modal.component";

@Component({
    selector: 'public-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink, AdminModalComponent,AdminModalComponent]
})
export class PublicHeaderComponent {
  public mainLogo: string = Images.mainLogo;
  readonly publicRoutes = PublicRoutes;
  readonly appRoutes = AppRoutes;
  readonly adminRoutes = AdminRoutes;
  constructor(public readonly commonService: CommonService) {}
}
