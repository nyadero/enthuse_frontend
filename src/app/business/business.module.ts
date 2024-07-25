import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './pages/business/business.component';
import { BusinessRoutingModule } from './business-routing.module';
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { BusinessContainerComponent } from './components/business-container/business-container.component';
import { BusinessPageComponent } from './pages/business-page/business-page.component';
import { AboutBusinessComponent } from './components/about-business/about-business.component';
import { BusinessRatingsComponent } from './components/business-ratings/business-ratings.component';
import { BusinessPostsComponent } from './components/business-posts/business-posts.component';
import { BusinessServiceComponent } from './components/business-service/business-service.component';
import { ManageBusinessComponent } from './pages/manage-business/manage-business.component';
import { BusinessClassifiedsComponent } from './components/business-classifieds/business-classifieds.component';
import { BusinessInsightsComponent } from './components/business-insights/business-insights.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { AddVehicleListingComponent } from './components/add-vehicle-listing/add-vehicle-listing.component';
import { AddMotorbikeListingComponent } from './components/add-motorbike-listing/add-motorbike-listing.component';
import { NewRatingComponent } from './components/new-rating/new-rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { EditBusinessComponent } from './components/edit-business/edit-business.component';
import { BusinessServicesComponent } from './components/business-services/business-services.component';
import { NewBusinessServiceComponent } from './components/new-business-service/new-business-service.component';
import { BusinessManagersComponent } from './components/business-managers/business-managers.component';
import { BusinessAdministratorComponent } from './components/business-administrator/business-administrator.component';
import { BusinessSearchbarComponent } from './components/business-searchbar/business-searchbar.component';
import { UserBusinessComponent } from './components/user-business/user-business.component';
import { CoreModule } from '../shared/core.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapviewComponent } from './components/mapview/mapview.component';


@NgModule({
    declarations: [
        BusinessComponent,
        AddBusinessComponent,
        BusinessContainerComponent,
        BusinessPageComponent,
        AboutBusinessComponent,
        BusinessRatingsComponent,
        BusinessPostsComponent,
        BusinessServiceComponent,
        ManageBusinessComponent,
        BusinessClassifiedsComponent,
        BusinessInsightsComponent,
        BusinessDetailsComponent,
        AddVehicleListingComponent,
        AddMotorbikeListingComponent,
        NewRatingComponent,
        RatingStarsComponent,
        EditBusinessComponent,
        BusinessServicesComponent,
        NewBusinessServiceComponent,
        BusinessManagersComponent,
        BusinessAdministratorComponent,
        BusinessSearchbarComponent,
        UserBusinessComponent,
        MapviewComponent,
    ],
    exports: [
        BusinessComponent,
    ],
    imports: [
        CommonModule,
        BusinessRoutingModule,
        CoreModule,
        ReactiveFormsModule,
        LeafletModule
    ]
})
export class BusinessModule { }
