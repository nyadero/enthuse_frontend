import { Component, Input, OnInit } from '@angular/core';
import { PostInterface } from '../../interface/post-interface';
import { ActivePostInterface } from '../../interface/activepost-interface';

@Component({
  selector: 'postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {

  selectedPost: PostInterface | null = null;

  @Input() posts: PostInterface[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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

  

}
