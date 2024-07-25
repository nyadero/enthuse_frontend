import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Form } from '@angular/forms';
import { AuthenticationComponent } from './pages/auth/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
