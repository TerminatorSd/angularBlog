import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-manage-post-list',
  templateUrl: './manage-post-list.component.html',
  styleUrls: ['./manage-post-list.component.less']
})
export class ManagePostListComponent implements OnInit {

  private postsList: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.postService.getList()
      .subscribe(res => {
        if (res.code === 0) {
          this.postsList = res.data;
        } else {
          console.log('get post list failed');
        }
      });
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(res => {
        if (res.code === 0) {
          this.getPostList();
        } else {
          alert('delete post failed');
        }
      });
  }

}
