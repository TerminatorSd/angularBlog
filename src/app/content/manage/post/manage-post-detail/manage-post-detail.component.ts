/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-25 09:31:59
 * @modify date 2018-08-25 09:31:59
 * @desc [description]
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import { FileUploader} from 'ng2-file-upload/file-upload/file-uploader.class';

import transfer from 'markdown-sd';

@Component({
  selector: 'app-manage-post-detail',
  templateUrl: './manage-post-detail.component.html',
  styleUrls: ['./manage-post-detail.component.less']
})
export class ManagePostDetailComponent implements OnInit {
  private newFlag = false;
  private postId: any;
  private postInfo: Post;
  private inputMarkdown: string;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.postId = params.get('id');
      // postId 为0 表示是新增
      if (this.postId !== '0') {
        this.getPostDetail();
      } else {
        this.newFlag = true;
        this.postInfo = new Post();
      }
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

  uploadImg(event) {
    const imgFile: File = event.target.files[0];
    // post data
    const postData = {
      namez: imgFile.name,
      size: imgFile.size,
      type: imgFile.type,
      url: ''
    };
    const a = new FileReader();
    a.onload = (e) => {
      // 获取base64
      console.log(e.target);
      postData.url = e.target.result;
      // 上传图片
      this.postService.uploadImg(postData)
        .subscribe(res => {
          if (res.code === 0) {
            console.log('fine');
          } else {
            alert('upload img failed');
          }
        });
    };
    a.readAsDataURL(imgFile);
  }

  publishBlog() {
    this.postInfo.html = transfer(this.postInfo.markdown);
    // 发送更新请求
    this.postService.updatePost(this.postInfo)
      .subscribe(res => {
        if (res.code === 0) {
          // alert('ok');
          // this.postInfo = res.data;
        } else {
          alert('update post detail failed');
        }
      });
  }

  addNewBlog() {
    this.postInfo.markdown = this.postInfo.markdown;
    this.postInfo.html = transfer(this.postInfo.markdown);
    // 发送更新请求
    this.postService.addPost(this.postInfo)
      .subscribe(res => {
        if (res.code === 0) {
          // alert('ok');
          // this.postInfo = res.data;
        } else {
          alert('update post detail failed');
        }
      });
  }

}
