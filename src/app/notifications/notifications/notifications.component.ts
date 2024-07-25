import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from 'src/app/shared/interface/user';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';
import { WebsocketService } from 'src/app/shared/service/socket-client.service';
import { NotificationsService } from '../service/notifications.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
  user!: UserInterface;
  messageSubject: any;
  receivedMessage!: string;
  notifications: any[] = [];

  constructor(private route: ActivatedRoute,
     private localStorage: LocalstorageService,
      private socketClient: WebsocketService, 
      private notificationsService: NotificationsService
    ) {
  }

  ngOnInit(): void {
    this.user = this.localStorage.getItem();

    // subscribe to receive notifications
    this.socketClient.stompClient.subscribe(`/topic/notifications/${this.user.name}`, (message) => {
      console.log({message});
      this.messageSubject = JSON.parse(message.body);
          this.receivedMessage = this.messageSubject.data;
          console.log({received: this.messageSubject.body.data.message});
    })

    // fetch user notifications 
    this.notificationsService.getUserNotifications().subscribe(
      (data) => {
        this.notifications = data.data.content;
        console.log({data});
        
      },
      (error) => {

      }
    )
  }

}
