import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() selectedPost: Post = { userId: 0, id: 0, title: '', body: '' };
  @Input() users?: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() save = new EventEmitter<Post>();
  selectedUser: any;

  close() {
    this.isOpen = false;
    this.closeModal.emit();
  }

  saveChanges() {
    if (this.selectedPost) {
      this.selectedPost.userId = this.selectedUser;
      console.log(this.selectedUser);
      this.save.emit(this.selectedPost);
      this.close;
    }
  }


}
