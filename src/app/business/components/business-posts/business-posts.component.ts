import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from '../../service/business.service';
import { PostInterface } from 'src/app/posts/interface/post-interface';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-business-posts',
  templateUrl: './business-posts.component.html',
  styleUrls: ['./business-posts.component.css']
})
export class BusinessPostsComponent implements OnInit {

  @Input() businessId!: string
  posts: PostInterface[] = [];
  httpResponse!: CustomHttpResponse

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.businessPosts(this.businessId).subscribe(
      (data) => {
        this.httpResponse = data;
        this.posts = data.data.content;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getNewPost(post: any) {
    this.posts.unshift(post);
  }

  getDeletePost(postId: string) {
    this.posts = this.posts.filter(post => post.id != postId)
  }
}
