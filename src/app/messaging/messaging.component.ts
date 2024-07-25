import { Component, OnInit } from '@angular/core';
import { MessagingService } from './service/messaging.service';
import { Subject } from 'rxjs';
import { CustomHttpResponse } from '../shared/interface/httpResponse';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  chats: Array<any> = [];
  httpResponse!: CustomHttpResponse;
  constructor(private messageService: MessagingService) { }

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

}
