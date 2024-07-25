import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PostsService } from '../../service/posts.service';
import { PostInterface } from '../../interface/post-interface';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-enthuse',
  templateUrl: './enthuse.component.html',
  styleUrls: ['./enthuse.component.css']
})
export class EnthuseComponent implements OnInit {

  selectedTab!: string;
  httpResponse!: CustomHttpResponse;
  isLoading: boolean = true;
  eventSubject:   Subject<PostInterface> = new Subject<PostInterface>();
  @Output() updatePosts = new EventEmitter<PostInterface>();

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    console.log({ snapshot });
    this.selectedTab = snapshot.queryParams["tab"] || "all";

    this.route.queryParams.subscribe((params) => {
      console.log({ params });
      this.selectedTab = params["tab"] || "all";
    });

    // call fetchPosts function
    // this.fetchPosts();
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigate(["/posts"], {
      relativeTo: this.route,
      queryParams: { tab: tab },
      queryParamsHandling: "merge"
    })
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
