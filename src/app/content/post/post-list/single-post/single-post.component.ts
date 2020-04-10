
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.less']
})
export class SinglePostComponent implements OnInit {

  @Input() post;
  imgPath: string;

  constructor() { }

  ngOnInit() {
    this.imgPath = `http://dance.shaodongweb.top/angularBlogBk/upload_img/${this.post.feature_image}`;

    // console.log(this.post);
  }
}
