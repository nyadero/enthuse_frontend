import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./pages/about/about.component";
import { TeamComponent } from "./pages/team/team.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { TermsAndCondtionsComponent } from "./pages/terms-and-condtions/terms-and-condtions.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes : Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: HomeComponent,
            data: { title: 'Home: Enthuse' },
        },
        {
            path: 'about',
            component: AboutComponent,
            data: { title: 'About Us: Enthuse' },
        },
        {
            path: 'team',
            component: TeamComponent,
            data: { title: 'Team: Enthuse' },
        },
        {
            path: 'contact',
            component: ContactComponent,
            data: { title: 'Contact us: Enthuse' },
        },
        {
            path: 'terms',
            component: TermsAndCondtionsComponent,
            data: { title: 'Terms and Conditions: Enthuse' },
        },
        {
            path: 'privacy',
            component: PrivacyComponent,
            data: { title: 'Privacy Policy: Enthuse' },
        },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule{

}