/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-25 09:31:59
 * @modify date 2018-08-25 09:31:59
 * @desc [description]
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../../post/post.service';

import transfer from 'markdown-sd';

@Component({
  selector: 'app-manage-post-detail',
  templateUrl: './manage-post-detail.component.html',
  styleUrls: ['./manage-post-detail.component.less']
})
export class ManagePostDetailComponent implements OnInit {
  private postId: any;
  private postInfo: object;
  private inputMarkdown: string;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.postId = params.get('id');
      this.getPostDetail();
    });
  }

  getPostDetail() {
    this.postService.getDetail(this.postId)
      .subscribe(res => {
        if (res.code === 0) {
          this.postInfo = res.data;
        } else {
          console.log('get post detail failed');
        }
      });
  }

  publishBlog() {
    const inputStr = document.querySelector('#markdown').value;
    this.postInfo.markdown = inputStr;
    this.postInfo.html = transfer(inputStr);
    // 发送更新请求
    this.postService.updatePost(this.postInfo)
      .subscribe(res => {
        if (res.code === 0) {
          this.postInfo = res.data;
        } else {
          console.log('update post detail failed');
        }
      });
  }

}
