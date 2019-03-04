import { Injectable } from '@angular/core';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(mytitle: string, mycontent: string) {
    const post: Post = {
      title: mytitle,
      content: mycontent
    };
    this.posts.push(post);
  }
}
