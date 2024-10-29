import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    private postsUrl = 'http://jsonplaceholder.typicode.com/posts';
    private usersUrl = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any[]> {
        return this.http.get<any[]>(this.postsUrl);
    }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.usersUrl);
    }

    deletePost(id: string): Observable<any> {
        return this.http.delete(`${this.postsUrl}/${id}`);
    }

    updatePost(post: any): Observable<any> {
        return this.http.put(`${this.postsUrl}/${post.id}`, post);
    }

    createPost(post: any): Observable<any> {
        return this.http.post(this.postsUrl, post);
    }

    savePost(post: any): Observable<any> {
        return this.http.post(this.postsUrl, post);
    }



}
