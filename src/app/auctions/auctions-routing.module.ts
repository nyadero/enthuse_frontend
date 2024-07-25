import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewAuctionComponent } from "./pages/new-auction/new-auction.component";
import { AuctionsComponent } from "./pages/auctions/auctions.component";
import { AuctionPageComponent } from "./pages/auction-page/auction-page.component";
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes: Routes = [{
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: AuctionsComponent
        },
        {
            path: "new-auction",
            component: NewAuctionComponent
        },
        {
            path: ":auctionId",
            component: AuctionPageComponent
        }

    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuctionsRoutingModule {

}