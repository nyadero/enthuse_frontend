import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from './shared/service/localstorage.service';

// import { WebsocketService } from './service/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = false;

 constructor(
  private router: Router,
  private localStorage: LocalstorageService,
 
) {
  
}

  ngOnInit(): void {
    console.log("app component");
    // this.socketClientService.connect();
    if (this.localStorage.isTokenExpired()) {
      this.localStorage.removeItem("enthuse_user");
      this.router.navigate(["/auth"]);
    }
  }
}

