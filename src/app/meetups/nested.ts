// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// // import * as d3 from 'd3';

// @Component({
//   selector: 'app-comment-component',
//   templateUrl: './comment-component.component.html',
//   styleUrls: ['./comment-component.component.css']
// })
// export class CommentComponent implements OnInit {

//   @ViewChild('commentContainer', { static: true })
//   commentContainer!: ElementRef;

//   ngOnInit(): void {
//     // Sample nested comments data (replace this with your data)
//     const nestedComments = [
//       {
//         id: 1,
//         text: 'Top-level comment 1',
//         replies: [
//           { id: 2, text: 'Reply 1 to comment 1' },
//           { id: 3, text: 'Reply 2 to comment 1' }
//         ]
//       },
//       {
//         id: 4,
//         text: 'Top-level comment 2',
//         replies: [
//           { id: 5, text: 'Reply 1 to comment 2' }
//         ]
//       }
//       // Add more comments or load from an API
//     ];

//     // Use D3.js to render comments
//     this.renderComments(nestedComments);
//   }

//   renderComments(commentsData: { id: number; text: string; replies: { id: number; text: string; }[]; }[]): void {
//     const commentContainer = d3.select(this.commentContainer.nativeElement);

//     // Use D3 data binding and enter/update/exit pattern to render nested comments
//     const commentGroups = commentContainer.selectAll('.comment-group')
//       .data(commentsData, (d: any) => d.id);

//     const commentGroupEnter = commentGroups.enter().append('div')
//       .classed('comment-group', true);

//     // Append top-level comments
//     commentGroupEnter.append('p')
//       .text((d: any) => d.text);

//     // Append replies
//     const replyGroups = commentGroupEnter.selectAll('.reply-group')
//       .data((d: any) => d.replies, (d: any) => d.id);

//     replyGroups.enter().append('p')
//       .classed('reply-group', true)
//       .text((d: any) => d.text);

//     // Exit deleted comments
//     commentGroups.exit().remove();
//   }
// }


// // <div #commentContainer></div>


// // @Component({
// //   selector: 'app-image-loader',
// //   templateUrl: './image-loader.component.html',
// //   styleUrls: ['./image-loader.component.css']
// // })
// // export class ImageLoaderComponent {

// //   isLoading: boolean = true;
// //   imageUrl: string = 'path/to/your/image.jpg'; // Replace with your image URL

// //   onImageLoad(): void {
// //     // Image has loaded successfully
// //     this.isLoading = false;
// //   }

// //   onImageError(): void {
// //     // Image loading encountered an error
// //     this.isLoading = false; // Optional: Set to false if you want to hide loading indicator on error
// //     console.error('Image failed to load.');
// //     // Optionally, handle error display or other actions
// //   }
// // }


// // <div *ngIf="isLoading; else loadedContent">
// //   <!-- Loading indicator or placeholder while the image is loading -->
// //   <p>Loading...</p>
// // </div>

// // <ng-template #loadedContent>
// //   <!-- Display the image when loaded -->
// //   <img [src]="imageUrl" (load)="onImageLoad()" (error)="onImageError()" />
// // </ng-template>

