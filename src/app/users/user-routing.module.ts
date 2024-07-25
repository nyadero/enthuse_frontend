import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ProfilesComponent } from "./pages/profiles/profiles.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: "",
            component: ProfilesComponent
        },
        {
            path: ":id",
            component: ProfileComponent
        },
       
    ]
}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {

}