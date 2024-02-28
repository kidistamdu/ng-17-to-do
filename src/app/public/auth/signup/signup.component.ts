import { Component } from '@angular/core';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { pageTransition } from 'src/app/shared/utils/animations';
import { PublicRoutes } from '../../public.routes';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { Images } from 'src/assets/data/images';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [pageTransition]
})
export class SignupComponent {
  readonly signupbannerImage:string = Images.auth.signup
  isLoading: boolean = false;
  readonly currentYear: number = DatetimeHelper.currentYear;
  readonly publicRoutes = PublicRoutes;

  constructor(
    public commonService: CommonService,
    private router: Router
  ) { }

  onFormSubmitHandler = (event: SubmitEvent) => {
    event.preventDefault();

  }
}
