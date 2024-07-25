import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "./components/feed/feed.component";
import { PostdetailsComponent } from "./pages/postdetails/postdetails.component";
import { EnthuseComponent } from "./pages/enthuse/enthuse.component";
import { ProfileComponent } from "../users/pages/profile/profile.component";
import { SociallayoutComponent } from "../shared/components/sociallayout/sociallayout.component";

const routes: Routes = [{
    path: '',
    component: SociallayoutComponent,
    children: [
        {
            path: "",
            component: EnthuseComponent
        },
        {
            path: ":id",
            component: PostdetailsComponent
        },
        {
            path: "profile/:id",
            component: ProfileComponent
        },
       
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialRoutingModule {

}