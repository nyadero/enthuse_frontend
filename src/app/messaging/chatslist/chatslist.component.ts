import { Component } from '@angular/core';
import { MessagingService } from '../service/messaging.service';
import { Router } from '@angular/router';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-chatslist',
  templateUrl: './chatslist.component.html',
  styleUrls: ['./chatslist.component.css']
})
export class ChatslistComponent {

  chats: Array<any> = [];
  httpResponse!: CustomHttpResponse;
  constructor(private messageService: MessagingService, private router:Router) { }

  ngOnInit(): void {
    this.messageService.getUserChats().subscribe(
      (data) => {
        this.httpResponse = data;
        this.chats = data.data;
      },
      (error) => {
        console.log(error);

      }
    )
  }


  loadChatDetails(chatId:string) {
    this.router.navigate(['chat', chatId])
  }
}
