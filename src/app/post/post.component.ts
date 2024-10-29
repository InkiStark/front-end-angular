import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { PostService } from '../post-list/post.service';
import { MatIconModule } from '@angular/material/icon'





@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})



export class PostComponent {
  @Output() deletePostevent = new EventEmitter<number>();
  @Output() editPostevent = new EventEmitter<any>();

  @Input() post?: any;



  onEdit(post: any) {
    console.log('Edit post', post);
    this.editPostevent.emit(this.post);
  }

  onDelete(post: any) {
    console.log('Delete post', post);
    this.deletePostevent.emit(this.post?.id);
  }



  next() {
    console.log('Next Page');
  }
  previous() {
    console.log('Previous Page');
  }

  deletePost() {
    console.log('Delete Post');
  }




}
