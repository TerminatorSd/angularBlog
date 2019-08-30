/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-16 10:38:18
 * @modify date 2018-08-16 10:38:18
 * @desc post list module
*/

import { SinglePostComponent } from './single-post/single-post.component';
import { PostListComponent } from './post-list.component';
import { NgModule } from '@angular/core';
import { PostService } from '../post.service';

@NgModule({
  declarations: [
    SinglePostComponent,
    PostListComponent
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [PostService],
})

export class PostListModule { }
