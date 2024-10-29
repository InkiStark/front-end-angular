import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { PostService } from './post.service';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { ModalComponent } from '../modal/modal.component';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}



@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, CommonModule, MatIconModule, ModalComponent,],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',

})
export class PostListComponent {
  posts: any[] = [];
  users: any[] = [];
  isModalOpen: boolean = false;
  selectedPost: Post = {
    id: 0,
    userId: 0,
    title: '',
    body: '',

  };

  isScrolled: any;

  constructor(private postService: PostService, private cd: ChangeDetectorRef) {

  }
  ngOnInit() {
    this.loadPosts();
    this.getUsers();
  }
  loadPosts() {
    this.postService.getPosts().subscribe((posts: any) => {
      this.posts = posts
    });
  }

  getUsers() {
    this.postService.getUsers().subscribe((users: any) => {
      console.log(users)
      this.users = users
    });
  }

  onAddNew() {
    console.log('Add new post');
    this.selectedPost = { userId: 0, id: this.posts?.length + 1, title: '', body: '' };
    this.isModalOpen = true;
  }

  edit(post: any) {
    console.log(post);
    this.isModalOpen = true;
    this.selectedPost = post;

  }

  delete(postId: number) {
    console.log('postId');
    this.posts = this.posts.filter(post => post.id !== postId);
    this.cd.markForCheck();
    this.cd.detectChanges();
  }

  openEditModal(post: any) {
    this.selectedPost = { userId: post.userId, id: post.id, title: post.title, body: post.body };
    this.isModalOpen = true;
    this.cd.markForCheck();
    this.cd.detectChanges();
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetSelectedPost();
  }
  resetSelectedPost() {
    this.selectedPost = { userId: 0, id: 0, title: '', body: '' };
  }

  updatePost(updatedPost: Post) {
    if (updatedPost.id) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index > -1) {
        this.posts[index] = updatedPost;
      } else {
        updatedPost.id = this.posts.length + 1;
        this.posts.push(updatedPost);
      }
    }
    this.closeModal();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

}
