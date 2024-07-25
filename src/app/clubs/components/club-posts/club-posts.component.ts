import { Component, Input, OnInit } from '@angular/core';
import { PostInterface } from 'src/app/posts/interface/post-interface';
import { ClubsService } from '../../service/clubs.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-club-posts',
  templateUrl: './club-posts.component.html',
  styleUrls: ['./club-posts.component.css']
})
export class ClubPostsComponent implements OnInit{
  @Input() clubId!: string;
  posts: PostInterface[] = [];
  selectedPost!: PostInterface;
  private eventsSubscription!: Subscription;
  @Input()
  events!: Observable<PostInterface>;
  currentPage: number = 0;


  constructor(private clubsService: ClubsService){}

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((post) => {
      this.posts.unshift(post)
    })
    this.loadPosts();
      
  }

  loadPosts(){
    this.clubsService.clubPosts(this.clubId, this.currentPage).subscribe(
      (data) => {
        this.posts = data.data.content;
        // console.log({data});
        
      },
      (error) => {
        
      }
    )
  }


   likePost($event: string) {
    throw new Error('Method not implemented.');
  }


  deletePost(postId: string) {
    console.log(postId, + " filtering out deletd post");
    this.posts = this.posts.filter(post => post.id != postId)
  }

  makePostActive(post: PostInterface) {
    // this.selectedPost = post;
    //   console.log(this.selectedPost);
  }

}
