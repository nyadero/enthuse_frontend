import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

   constructor(private httpClient: HttpClient) { }

  // new post
  newPost(post: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/posts`, post)
  }

  // get all posts
  getAllPosts(currentPage: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`http://localhost:8080/api/v1/posts?pageNumber=${currentPage}`);
  }

  // get post by id
  getPost(id:string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`http://localhost:8080/api/v1/posts/${id}`);
  }

  // all comments for a single
  commentsForPost(postId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`http://localhost:8080/api/v1/posts/all-comments/${postId}`);
  } 

  // posts from followed users, businesses etc
  followedPosts(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/posts/followed`);
  }

  // comment on a post
  addComment(postId: string, comment: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/posts/comment/${postId}`, comment);
  }

  // delete a post
  deletePost(postId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/posts/${postId}`);
  }

  
  // p
   postsByUserId(userId: string, pageNumber: number) : Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/posts/user-posts/${userId}?pageNumber=${pageNumber}`);
  }

  // search posts
  searchPosts(query: string):  Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/posts/search?query=${query}`);
  }


}
