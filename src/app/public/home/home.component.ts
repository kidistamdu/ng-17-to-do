import { Component, Input } from '@angular/core';
import {PublicRoutes} from "../public.routes";
import {CommonService} from "../../_core/services/common.service";
import {AppRoutes} from "../../app.routes";
import {AdminRoutes} from "../../admin/admin.routes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  rowData: any = [];
  readonly publicRoutes = PublicRoutes;

  constructor(public readonly commonService: CommonService) {
  }

  protected readonly AppRoutes = AppRoutes;
  protected readonly AdminRoutes = AdminRoutes;
}
