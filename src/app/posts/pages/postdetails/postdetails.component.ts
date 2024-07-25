import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../../service/posts.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  post: any = null;
  commentsList: Array<any> = [];
  httpResponse!: CustomHttpResponse;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let postId = params.get("id");
      if (postId) {
        this.postsService.getPost(postId).subscribe(
          (data) => {
            this.httpResponse = data;
            this.post = data.data;
            console.log(data);
          },
          (error) => {
            console.log(error.message);
          }
        )

        this.postsService.commentsForPost(postId).subscribe(
           (data) => {
            this.httpResponse = data;
            this.commentsList = data.data;
            console.log(data);
          },
          (error) => {
            console.log(error.message);
          }
        )
      }
    })
  }

}
