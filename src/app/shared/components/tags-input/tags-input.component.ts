import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css']
})
export class TagsInputComponent {
  @Input() tags: string[] = [];
  newTag: string = '';
  @Output() emitTagsEvent = new EventEmitter<string[]>()
  

  addTag(){
    if(this.newTag.trim() !== ''){
      this.tags = this.tags.concat(this.newTag.trim());
      // clear the input
      this.newTag = '';
      this.emitTags(this.tags)
    }
  }

  removeTag(index: number){
    this.tags = this.tags.splice(index, 1);
  
    this.emitTags(this.tags);
  }

  emitTags(tags: string[]){
     this.emitTagsEvent.emit(tags);
  }
}
