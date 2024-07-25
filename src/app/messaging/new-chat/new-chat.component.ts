import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../service/messaging.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {
  recipient:any = null;
  recipientSelected: boolean = false;
  httpResponse!: CustomHttpResponse;
  users: Array<any> = [];

  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.messagingService.getUsers().subscribe(
      (data) => {
        this.httpResponse = data;
        this.users = data.data;
      },
      (error) => {
        console.log(error);

      }
    )
  }

  loadChatDetails(username: string) {
     this.recipientSelected = true;
     this.recipient = username;
  }

}
