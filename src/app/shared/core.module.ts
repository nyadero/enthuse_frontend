import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from "@angular/material/snack-bar"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ImgFallbackModule } from 'ngx-img-fallback';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PostsModule } from '../posts/posts.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
// import { ImageLoaderComponent } from '../meetups/nested';
import { MessagingModule } from '../messaging/messaging.module';
import { BusinessInfoComponent } from './components/business-info/business-info.component';
import { ChatlayoutComponent } from './components/chatlayout/chatlayout.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { FooterComponent } from './components/footer/footer.component';
import { GarageItemComponent } from './components/garage-item/garage-item.component';
import { HorizontalSliderComponent } from './components/horizontal-slider/horizontal-slider.component';
import { HorizontalscrollComponent } from './components/horizontalscroll/horizontalscroll.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListingPhotosComponent } from './components/listing-photos/listing-photos.component';
import { OtherImagesComponent } from './components/listing-photos/other-images/other-images.component';
import { SelectedImageComponent } from './components/listing-photos/selected-image/selected-image.component';
import { LoadingErrorIndicatorComponent } from './components/loading-error-indicator/loading-error-indicator.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MotorbikeformComponent } from './components/motorbikeform/motorbikeform.component';
import { MyBusinessComponent } from './components/my-business/my-business.component';
import { NavigationIndicatorComponent } from './components/navigation-indicator/navigation-indicator.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SociallayoutComponent } from './components/sociallayout/sociallayout.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import { TrendingTagsComponent } from './components/trending-tags/trending-tags.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { VehicleformComponent } from './components/vehicleform/vehicleform.component';
import { PostComponent } from './components/post/post.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SociallayoutComponent,
    SidebarComponent,
    LayoutComponent,
    FileuploadComponent,
    SuggestionsComponent,
    NotfoundComponent,
    LoadingSpinnerComponent,
    ChatlayoutComponent,
    ListingPhotosComponent,
    SelectedImageComponent,
    OtherImagesComponent,
    NewPostComponent,
    PostComponent,
    VehicleformComponent,
    MotorbikeformComponent,
    GarageItemComponent,
    UserDetailsComponent,
    BusinessInfoComponent,
    TagsInputComponent,
    HorizontalscrollComponent,
    HorizontalSliderComponent,
    LoadingErrorIndicatorComponent,
    ImageLoaderComponent,
    NavigationIndicatorComponent,
    MyBusinessComponent,
    TrendingTagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MessagingModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule.forRoot(),
    CKEditorModule,
    ImgFallbackModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    SociallayoutComponent,
    SidebarComponent,
    FileuploadComponent,
    SuggestionsComponent,
    LoadingSpinnerComponent,
    NotfoundComponent,
    ListingPhotosComponent,
    NewPostComponent,
    PostComponent,
    VehicleformComponent,
    MotorbikeformComponent,
    GarageItemComponent,
     UserDetailsComponent,
     BusinessInfoComponent,
     TagsInputComponent,
     HorizontalscrollComponent,
     HorizontalSliderComponent,
     LoadingErrorIndicatorComponent,
     ImageLoaderComponent,
     MyBusinessComponent,
     TrendingTagsComponent
  ]
})
export class CoreModule { }
