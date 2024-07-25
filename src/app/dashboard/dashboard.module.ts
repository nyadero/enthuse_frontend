import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassifiedsAccountComponent } from './pages/classifieds-account/classifieds-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatTabsModule} from "@angular/material/tabs";
import { AccountComponent } from './components/account/account.component'
import { MyBusinessPagesComponent } from './components/my-business-pages/my-business-pages.component';
import { BusinessPageComponent } from './components/business-page/business-page.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatChipsModule } from '@angular/material/chips'
import { MatInputModule } from "@angular/material/input"
import { ToggleComponent } from './components/toggle/toggle.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { GarageModule } from '../garage/garage.module';
import { CoreModule } from '../shared/core.module';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';
import { AboutComponent } from './components/about/about.component';
import { SecurityDetailsComponent } from './components/security-details/security-details.component';
import { UploadCoverpictureComponent } from '../business/components/upload-coverpic/upload-coverpic.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ClassifiedsAccountComponent,
    AccountComponent,
    UploadAvatarComponent,
    MyBusinessPagesComponent,
    BusinessPageComponent,
    AboutComponent,
    SecurityDetailsComponent,
    PreferencesComponent,
    UploadCoverpictureComponent,
    ToggleComponent,
    DashboardNavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    CoreModule,
    GarageModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
