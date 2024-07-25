import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagingService } from '../service/messaging.service';
import { StompSubscription } from '@stomp/stompjs';
import { Observable, Subject } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { WebsocketService } from 'src/app/shared/service/socket-client.service';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.css']
})
export class ChatDetailsComponent implements OnInit{
  chatId!: any;
  @Input() recipient!: any;
  httpResponse!: CustomHttpResponse;
  messages: Array<any> = [];
  messageSubject: any;
  receivedMessage!: any;

  constructor(private route: ActivatedRoute,
     private messagingService: MessagingService,
      private socketClient: WebsocketService
    ) 
      {}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.chatId = params.get("chatId");
      if (this.chatId) {
        // this.socketClient.subscribeToChatMessages(this.chatId).subscribe(
        //   (message) => {
        //     console.log(message);
        //      this.messageSubject = JSON.parse(message.body);
        //      this.receivedMessage = this.messageSubject.data;
        //   }
        // );
        this.socketClient.stompClient.subscribe(`/topic/messages/${this.chatId}`, (message) => {
          console.log({ message: message.body });
          this.messageSubject = JSON.parse(message.body);
          this.receivedMessage = this.messageSubject.body.data.message;
          this.messages = this.messages.concat(this.messageSubject.body.data);
          console.log({received: this.messageSubject.body, messages: this.messages}); 
        });

        this.messagingService.getChatMessages(this.chatId).subscribe(
          (data) => {
            this.httpResponse = data;
            this.messages = data.data;
            console.log(data);

          },
          (error) => {
            console.log(error);
          }
        )
      }
    })
  }

  // destroy subscription
  ngOnDestroy() {
    console.log("destroying, unsubscribe");
  }


}
