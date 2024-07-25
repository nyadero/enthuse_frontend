import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/interface/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  authenticatedUser!: UserInterface;
  authenticationForm!: FormGroup;
  isLogin: boolean = true;
  router: Router = new Router();

  constructor(
    private authenticationService: AuthenticationService, 
    private authService: AuthService,
     private localStorageService: LocalstorageService,
      private formBuilder: FormBuilder, 
      private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.authenticationForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
      userName: ["", [Validators.required]]
    });
  }

  toggleMode() {
    this.isLogin = !this.isLogin
  }

  submitForm() {
    console.log(this.authenticationForm.value);
    if (this.isLogin) {
      this.authenticationService.loginUser(this.authenticationForm.value).subscribe(
        (data) => {
          console.log(data);
          if (data.status === "SUCCESS") {
            this.authenticatedUser = data.data;
            this.localStorageService.setItem("enthuse_user", this.authenticatedUser);
            this.notificationService.showSnackbar(data.message, data.status);
            this.router.navigate(['']);
            this.authService.login(this.authenticatedUser.jwtToken)
          }
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      this.authenticationService.registerUser(this.authenticationForm.value).subscribe(
        (data) => {
          console.log(data);
          this.notificationService.showSnackbar(data.message, data.status);
          this.router.navigate(['/auth']);
        },
        (error) => {
          console.log(error.message);
        }
      )

    }
  }


}
