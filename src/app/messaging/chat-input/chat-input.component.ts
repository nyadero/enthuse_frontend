import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from '../service/messaging.service';
import { WebsocketService } from 'src/app/shared/service/socket-client.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  @Input() recipientId!: string;
  @Input() chatId!: string;
  messageForm!: FormGroup;

  constructor(private messageService:MessagingService, 
    private socketClient: WebsocketService
  ) { }

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      message: new FormControl("", Validators.required),
      recipientId: new FormControl(this.recipientId, Validators.required)
    })
  }

  submitForm() {
    console.log(this.messageForm.value);
    // this.messageService.newChat(this.messageForm.value).subscribe(
    //   (data) => {
    //     console.log({data});
    
    //   },
    //   (error) => {

    //   }
    // )

    this.socketClient.send(`/app/messages/${this.chatId}`, this.messageForm.value);
    this.messageForm.reset();
  }
}
