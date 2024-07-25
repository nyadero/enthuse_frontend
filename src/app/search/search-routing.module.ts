import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GobalSearchComponent } from "./pages/gobal-search/gobal-search.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes: Routes = [{
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: GobalSearchComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule{

}