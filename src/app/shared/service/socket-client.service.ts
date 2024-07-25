import { Injectable } from '@angular/core';
import { Client, Stomp, ActivationState, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  stompClient!: Client;
  messageSubject: Subject<any> = new Subject<any>();
  authenticatedUser!: any;

  constructor() {
    this.initializeStompClient()
  }


  private initializeStompClient(): void {
    let token;
    const user = localStorage.getItem("enthuse_user");

    if (user !== null) {
      this.authenticatedUser = JSON.parse(user);
      token = this.authenticatedUser.jwtToken.replace('"', " ");
    } else {
      // Handle the case where 'user' is null, maybe set default values or show an error message
      console.error('User data not found in local storage');
    }
    console.log(this.authenticatedUser?.name);


    this.stompClient = new Client({
      brokerURL: "ws://localhost:8080/api/v1/enthuze",
      connectHeaders: {
        Authorization: `${token}`,
        simpUser: this.authenticatedUser?.email,
        server: 'Your Server Name'
      },
      debug: (str) => {
        console.log(str);
      }
    });
    this.connect()
  }

  connect(): Observable<void> {
    return new Observable<void>(observer => {
      if (this.stompClient.connected && this.authenticatedUser) {
        observer.next(); // WebSocket already connected
        observer.complete();
      } else {
        // Subscribe to the Stomp client's onConnect event
        this.stompClient.onConnect = () => {
          observer.next(); // WebSocket connected
          observer.complete();
        };

        // Activate the Stomp client to establish the WebSocket connection
        this.stompClient.activate();
      }
    });
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  disconnect(): void {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.deactivate();
      console.log("Disconnected from socket");

    }
  }

  send(destination: string, body: any): void {
    try {
      if (this.stompClient.connected) {
        console.log({destination, body});
        this.stompClient.publish({ destination: destination, body: JSON.stringify(body) });
      }
    } catch (error) {
      console.log(error)
    }
  }

  subscribeToChatMessages(chatId: string): Observable<any> {
      if (this.stompClient.connected) {
        console.log("Subscribing to chat messages");
        this.stompClient.subscribe(`/topic/messages/${chatId}`, (message) => {
          console.log({ message: message.body });
          this.messageSubject.next(message);
        });
        return this.messageSubject.asObservable();
      } else {
        console.log("WebSocket is not connected. Waiting for connection...");
        // Subscribe to the Stomp client's onConnect event
        this.stompClient.onConnect = () => {
          console.log("WebSocket connected. Subscribing to chat messages");
          this.stompClient.subscribe(`/topic/messages/${chatId}`, (message) => {
            console.log({ message: message });
            this.messageSubject.next(message);
          });
          return this.messageSubject.asObservable();
        };
        // Activate the Stomp client to establish the WebSocket connection
        this.stompClient.activate();
    };
    return new Observable();
  }

  subscribeToAuctionBids(auctionId: string): Observable<any> {
    if (this.stompClient.connected) {
      console.log("Subscribing to auction bids");
      this.stompClient.subscribe(`/topic/bids/${auctionId}`, (message) => {
        console.log({ message });
        this.messageSubject.next(message);
      });
      return this.messageSubject.asObservable();
    } else {
      console.log("WebSocket is not connected. Waiting for connection...");
      // Subscribe to the Stomp client's onConnect event
      this.stompClient.onConnect = () => {
        console.log("WebSocket connected. Subscribing to auction bids");
        this.stompClient.subscribe(`/topic/bids/${auctionId}`, (message) => {
          console.log({ message: message });
          this.messageSubject.next(message);
        });
        return this.messageSubject.asObservable();
      };
      // Activate the Stomp client to establish the WebSocket connection
      this.stompClient.activate();
  };
  return new Observable();
}

// subscribe to posts like event
subscribeToLikeChecker(postId: string): Observable<any>{
  if (this.stompClient.connected) {
    console.log("Subscribing to auction bids");
    this.stompClient.subscribe(`/topic/posts/${postId}`, (message) => {
      console.log({ message });
      this.messageSubject.next(message);
    });
    return this.messageSubject.asObservable();
  } else {
    console.log("WebSocket is not connected. Waiting for connection...");
    // Subscribe to the Stomp client's onConnect event
    this.stompClient.onConnect = () => {
      console.log("WebSocket connected. Subscribing to auction bids");
      this.stompClient.subscribe(`/topic/posts/${postId}`, (message) => {
        console.log({ message: message });
        this.messageSubject.next(message);
      });
      return this.messageSubject.asObservable();
    };
    // Activate the Stomp client to establish the WebSocket connection
    this.stompClient.activate();
};
return new Observable();
}
  
  subscribeToNotifications(userId: string): Observable<any> {
    console.log("subscribing to notifications");
    if (this.stompClient.connected) {
      const subscription: StompSubscription = this.stompClient.subscribe(`/topic/notifications/${this.authenticatedUser.name}`, (message) => {
        console.log({ message });
        this.messageSubject.next(JSON.parse(message.body));
      });
      return this.messageSubject.asObservable();
    }
    return new Observable()
  }


  // You can add additional methods for handling subscriptions, sending messages, etc.

  // sendHeartbeat(): void {
  //   setInterval(() => {
  //     if (this.stompClient.connected) {
  //       this.stompClient.publish({ destination: '/app/heartbeat', body: '' });
  //     }
  //   }, 30000); // Send heartbeat every 30 seconds
  // }
  
}
