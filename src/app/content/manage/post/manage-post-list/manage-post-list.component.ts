import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { MessageService } from 'src/app/service/message.service';
import { BroadcastService } from 'src/app/service/broadcast.service';

@Component({
  selector: 'app-manage-post-list',
  templateUrl: './manage-post-list.component.html',
  styleUrls: ['./manage-post-list.component.less']
})
export class ManagePostListComponent implements OnInit {

  private postsList: any;
  private msgs = [];

  constructor(private postService: PostService, private messageService: MessageService, private bcService: BroadcastService) { }

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
          this.bcService.evtBus.emit([{ severity: 'info', summary: '操作信息', detail: `删除成功~`, life: 2000 }])
          this.getPostList();
        } else {
          this.bcService.evtBus.emit([{ severity: 'danger', summary: '操作信息', detail: `删除失败！`, life: 2000 }])
        }
      });
  }

}
