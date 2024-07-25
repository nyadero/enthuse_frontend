import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRoutingModule } from './messaging-routing.module';
import { MessagingComponent } from './messaging.component';
import { ChatslistComponent } from './chatslist/chatslist.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { ChatInputComponent } from './chat-input/chat-input.component';



@NgModule({
  declarations: [
    MessagingComponent,
    ChatslistComponent,
    NewChatComponent,
    ChatDetailsComponent,
    ChatInputComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MessagingComponent,
    ChatslistComponent
  ]
})
export class MessagingModule { }
