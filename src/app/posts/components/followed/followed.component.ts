import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../../interface/post-interface';
import { PostsService } from '../../service/posts.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.css']
})
export class FollowedComponent implements OnInit {
  posts: PostInterface[] = [];
  httpResponse!: CustomHttpResponse;
  
  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.postsService.followedPosts().subscribe(
      (data) => {
        this.httpResponse = data;
        this.posts = data.data;
        console.log({data})
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
