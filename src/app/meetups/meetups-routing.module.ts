import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MeetupsComponent } from "./pages/meetups/meetups.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";


const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: MeetupsComponent
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeetupRoutingModule{

}