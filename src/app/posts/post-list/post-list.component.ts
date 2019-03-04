import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   { title: 'First Post', content: 'This is some content' },
  //   { title: 'Second Post', content: 'This is some content' },
  //   { title: 'Third Post', content: 'This is some content' },
  //   { title: 'Fourth Post', content: 'This is some content' }
  // ];
  @Input() posts = [];
}
