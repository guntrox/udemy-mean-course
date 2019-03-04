import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(mytitle: string, mycontent: string) {
    const post: Post = { title: mytitle, content: mycontent };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
