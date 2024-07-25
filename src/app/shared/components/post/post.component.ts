import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostInterface } from 'src/app/posts/interface/post-interface';
import * as moment from "moment";
import { PostsService } from 'src/app/posts/service/posts.service';
import { LikesService } from 'src/app/likes/service/likes.service';
import { UserInterface } from '../../interface/user';
import { LocalstorageService } from '../../service/localstorage.service';
import { NotificationService } from '../../service/notification.service';
import { WebsocketService } from '../../service/socket-client.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: PostInterface;
  @Output() likeEvent = new EventEmitter<string>();
  commentCount!: number;
  likeCount!: number;
  postId!: string;
  @Output() postClicked = new EventEmitter<PostInterface>()
  @Output() deletePostEvent = new EventEmitter<string>();
  canDeletePost: boolean = false;
  user!: UserInterface;
  @Input() selectedPost: PostInterface | null = null;
  isLiked: boolean = false;
  isFollowingUser: boolean = false;
  isFollowingBusiness: boolean = false;
  isForumMember: boolean = false;
  datePosted!: string;
  messageSubject: any;


  constructor(
    private postsService: PostsService,
     private localStorage: LocalstorageService,
      private notificationService: NotificationService,
   private likesService: LikesService, 
    private socketClient: WebsocketService
  ) {
      }

  ngOnInit(): void {
    this.user = this.localStorage.getItem();
    this.commentCount = this.post.commentsCount;
    this.likeCount = this.post.likesCount;
    this.postId = this.post.id;
    this.canDeletePost = this.user.id == this.post.user.id;
    this.datePosted = moment(this.post.createdAt).fromNow();

    // subscribe to websocket event and wait for the isLiked status
    // this.socketClient.stompClient.subscribe(`/topic/posts/${this.postId}`, (message) => {
    //   console.log("subscribed to ");
    //   console.log({ message: message.body });
    //   this.messageSubject = JSON.parse(message.body);
      
    // });

    this.socketClient.subscribeToLikeChecker(this.postId).subscribe(
      (message) =>{
         console.log({ message: message.body });
      this.messageSubject = JSON.parse(message.body);
      }
    )

  }

  likePost() {
    this.isLiked = !this.isLiked;
    this.likesService.likePost(this.postId).subscribe(
      (data) => {
        // this.emitLikeEvent(data.data.id);
        console.log({data});
        if (data.data.actionType == "Like") {
          this.likeCount++;
          console.log(this.likeCount);
          this.post.isPostLiked = true;
          this.notificationService.showSnackbar(data.message, data.status);
        } else if (data.data.actionType == "Dislike"){
          this.likeCount--;
          this.post.isPostLiked = false;
          this.notificationService.showSnackbar(data.message, data.status);
        }
      },
      (error) => {

      }
    )
  }

  emitLikeEvent(likeId: string) {
    this.likeEvent.emit(likeId);
  }


  activatePost() {
    this.postClicked.emit(this.post);
    console.log(this.post);
    console.log(this.isSelectedPost()); 
  }

  isSelectedPost(): boolean {
    if (!this.selectedPost) {
      return false;
    }
    return (
      this.selectedPost.id == this.post.id
    )
  }

  deletePost() {
    console.log("deleting post");
    this.postsService.deletePost(this.post.id).subscribe(
      (data) => {
        console.log(data);
        this.emitDeleteEvent(this.post.id);
        // this.posts = this.posts.filter(post => post.id != this.postId)
      },
      (error) => {
        console.log(error);
      }
    )
  }

  emitDeleteEvent(postId: string) {
    console.log("emit event " + postId);
    this.deletePostEvent.emit(postId);
    console.log("event emited");
  }

}
