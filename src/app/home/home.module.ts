import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { BusinessBannerComponent } from './components/business-banner/business-banner.component';
import { FeaturesBannerComponent } from './components/features-banner/features-banner.component';
import { MarketplaceBannerComponent } from './components/marketplace-banner/marketplace-banner.component';
import { HomeComponent } from './home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsAndCondtionsComponent } from './pages/terms-and-condtions/terms-and-condtions.component';
import { SocialBannerComponent } from './components/social-banner/social-banner.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuctionsBannerComponent } from './components/auctions-banner/auctions-banner.component';

@NgModule({
  declarations: [
    BusinessBannerComponent,
    FeaturesBannerComponent,
    MarketplaceBannerComponent,
    HomeComponent,
    PrivacyComponent,
    TermsAndCondtionsComponent,
    SocialBannerComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    AuctionsBannerComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    BusinessBannerComponent,
    FeaturesBannerComponent,
    MarketplaceBannerComponent
  ]
})
export class HomeModule { }
