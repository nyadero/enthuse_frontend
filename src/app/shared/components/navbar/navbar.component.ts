import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { UserInterface } from '../../interface/user';
import { AuthService } from '../../service/auth.service';
import { AvatarService } from '../../service/avatar.service';
import { LocalstorageService } from '../../service/localstorage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent implements OnInit {

  authenticatedUser!: UserInterface;
  isshowDropdown: boolean = false;
  isShowSidebar: boolean = false;
  @Output() toggleShowNavbar = new EventEmitter<boolean>();
  userAvatar: string | null = null;
  isNavigatingLocal: boolean = false;

  

  constructor(
    private authenticationService: AuthenticationService,
     public authSevice: AuthService,
      private localstorageService: LocalstorageService,
       private router: Router,
     private avatarService: AvatarService
    ) { }

  ngOnInit(): void {
    this.authenticatedUser = this.localstorageService.getItem();
    this.avatarService.getUserAvatar().then((avatar: string) => {
      console.log({avatar});
      this.userAvatar = avatar;
    }).catch((error) => {
       console.log(error.message);
    })
  }


  logoutUser() {
    this.authenticationService.logoutUser();
    this.router.navigate(['']);
  }

  showDropdown() {
    this.isshowDropdown = !this.isshowDropdown;
  }

  emitToggleState(){
    this.isShowSidebar = !this.isShowSidebar
    this.toggleShowNavbar.emit(this.isShowSidebar);
    console.log(this.isShowSidebar);
  }

}
