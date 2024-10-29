import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end-angular-new';
}

