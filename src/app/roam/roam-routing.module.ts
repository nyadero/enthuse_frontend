import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoamComponent } from "./pages/roam/roam.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";


const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: RoamComponent
        },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoamRoutingModule{}