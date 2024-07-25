import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClubsService } from '../../service/clubs.service';
import { ClubInterface } from '../../interface/club.interface';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, ParamMap } from '@angular/router';
import { PostInterface } from 'src/app/posts/interface/post-interface';
import { Subject } from 'rxjs';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {
  selectedTab!: string;
  isMember: boolean = false;
  club!: ClubInterface;
  clubId: string = "";
  eventSubject:   Subject<PostInterface> = new Subject<PostInterface>();
  @Output() updatePosts = new EventEmitter<PostInterface>();
  isLoading: boolean = true;


  constructor(private clubsService: ClubsService, private activatedRoute: ActivatedRoute, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    this.selectedTab = snapshot.queryParams["tab"] || "about";

    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params["tab"] || "about";
    });

   

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let clubId = params.get("clubId");
      if (clubId) {
        this.clubId = clubId;
        this.clubsService.clubById(this.clubId).subscribe(
          (data) => {            
            this.club = data.data;
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
          }
        )
      }
    })

    this.isclubMember();

  }

  changeTab(tab: string) {
     this.selectedTab = tab;
    this.router.navigate(["/clubs", this.club.id], {
      relativeTo: this.activatedRoute,
      queryParams: { tab: tab },
      queryParamsHandling: "merge"
    })
  }


  isclubMember(){
     // check if user is member
     console.log("checking if club member");
     
    this.clubsService.isclubMember(this.clubId).subscribe(      
      (data) => {
        this.isMember = data.data;
        console.log({data});
        
      },
      (error) => {

      })

  }

  joinClub(clubId: string) {
    this.clubsService.joinclub(clubId).subscribe(
      (data) => {
        this.isclubMember();
        this.notificationService.showSnackbar(data.message, data.status);
      },
      (error) => {
    
      }
    )
  }

  getNewPost(post: PostInterface) {
    console.log({ post });
    this.eventSubject.next(post);
    // this.posts.unshift(post);
    this.updatePostsList(post);
  }

  updatePostsList(post: PostInterface) {
    this.updatePosts.emit(post);
  }

}
