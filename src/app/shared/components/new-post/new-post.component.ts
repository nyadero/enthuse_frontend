import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/posts/service/posts.service';
import { CustomHttpResponse } from '../../interface/httpResponse';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postType: string = "Text";
  newPostForm!: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  httpResponse!: CustomHttpResponse;
  @Input() businessId!: string;
  @Input() forumId!: string;
  @Output() newlyAddedPost = new EventEmitter<any>();

  constructor(
    private postsService: PostsService, 
    private formBuilder: FormBuilder, 
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.newPostForm = this.formBuilder.group({
      description: ["", [Validators.required]],
      mediaUrls: ["", Validators.required]
    })
  }

  showPhotoInput() {
    this.postType = "Media"
  }

  showTextInput() {
    this.postType = "Text"
  }

  onSelectedFilesChanged(files: File[]) {
    this.selectedFiles = files;
  }


  submitPost() {
    const values = this.newPostForm.value;
    const formData = new FormData();
    formData.append("description", values.description)
     this.selectedFiles.forEach((photo: Blob) => {
      formData.append("mediaUrls", photo);
    });
    formData.append("postType", this.postType.toUpperCase());
    formData.append("businessId", this.businessId ? this.businessId : "");
    formData.append("forumId", this.forumId ? this.forumId : "");
    console.log("SUbmiting post ", + formData);
    

    this.postsService.newPost(formData).subscribe(
      (data) => {
        console.log({data});
        this.httpResponse = data;
        this.notificationService.showSnackbar(data.message, data.status);
        this.emitNewPost(data.data);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  // emit data results to the posts list
  emitNewPost(post: any){
    this.newlyAddedPost.emit(post);
  }

}
