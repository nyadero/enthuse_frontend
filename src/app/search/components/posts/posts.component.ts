import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostInterface } from 'src/app/posts/interface/post-interface';
import { PostsService } from 'src/app/posts/service/posts.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
    posts: PostInterface[] = [];
  httpResponse!: CustomHttpResponse;
  isLoading: boolean = true;
  selectedPost!: PostInterface;
  currentPage: number = 0;
  totalPostsFetched: number = 0;
  totalAvailablePosts: number = 0;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    // this.eventsSubscription = this.events.subscribe((post) => {
    //   this.posts.unshift(post)
    // })
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['tab'] === 'posts' && !params['query']) {
        this.loadPosts();
      } else {
        this.postsService.searchPosts(params['query']).subscribe(
          (data) => {
            this.posts = data.data;
          }
        )
      }
    })
  }


  likePost($event: string) {
    throw new Error('Method not implemented.');
  }


  deletePost(postId: string) {
    console.log(postId, + " filtering out deletd post");
    this.posts = this.posts.filter(post => post.id != postId)
  }

  makePostActive(post: PostInterface) {
    this.selectedPost = post;
    console.log(this.selectedPost);
  }

  

  loadPosts() {
    this.postsService.getAllPosts(this.currentPage).subscribe(
      (data) => {
        console.log({ data });
        this.httpResponse = data;
        console.log({ data });
        this.totalPostsFetched += data.data.numberOfElements;
        this.totalAvailablePosts = data.data.totalElements;
        this.posts = this.posts.concat(data.data.content);
        this.isLoading = false
      },
      (error) => {
        console.log(error.message);
        this.isLoading = false;
      }
    )
  }

   // listen to scroll event
  @HostListener("window:scroll", [`$event`])
  onScroll(event: Event) {
     if(window.innerHeight + window.scrollY >= document.body.scrollHeight && this.totalPostsFetched < this.totalAvailablePosts){
       this.currentPage++;
       this.loadPosts();
     }else{
       console.log("all posts have been fetched");
     }
  }
}
