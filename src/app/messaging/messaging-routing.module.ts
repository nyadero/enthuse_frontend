import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessagingComponent } from "./messaging.component";
import { NewChatComponent } from "./new-chat/new-chat.component";
import { ChatDetailsComponent } from "./chat-details/chat-details.component";
import { ChatlayoutComponent } from "../shared/components/chatlayout/chatlayout.component";

const routes: Routes = [{
    path: '',
    component: ChatlayoutComponent,
    children: [
        {
            path: '',
            component: MessagingComponent
        },
        {
            path:"new-chat",
            component: NewChatComponent
        },
        {
            path: ":chatId",
            component: ChatDetailsComponent
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessageRoutingModule {

}