import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClubPageComponent } from "./pages/club-page/club-page.component";
import { ClubsComponent } from "./pages/clubs/clubs.component";
import { NewClubComponent } from "./pages/new-club/new-club.component";
import { JoinedClubsComponent } from "./components/joined-clubs/joined-clubs.component";
import { UserClubsComponent } from "./components/user-clubs/user-clubs.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes : Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: ClubsComponent
            },
             {
                path: "new-club",
                component: NewClubComponent
            },
           
            {
              path: "joined",
              component: JoinedClubsComponent
            },
            {
                path: "my-clubs",
                component: UserClubsComponent
            },
            {
                path: ":clubId",
                component: ClubPageComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClubsRoutingModule{
    
}