import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.css']
})
export class SecurityDetailsComponent implements OnInit {

  updatePasswordForm!: FormGroup;
  httpResponse!: CustomHttpResponse;

  constructor(private authService: AuthenticationService, private notificationService: NotificationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updatePasswordForm = this.formBuilder.group({
      currentPassword: [],
      newPassword: [],
      confirmNewPassword: []
    })
  }

  updatePassword() {
    this.authService.updatePassword(this.updatePasswordForm.value).subscribe(
      (data) => {
        this.httpResponse = data;
        this.notificationService.showSnackbar(data.message, data.status);
      },
      (error) => {

      }
    )
  }

}
