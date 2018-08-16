import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './content/post/post-list/single-post/single-post.component';
import { PostListComponent } from './content/post/post-list/post-list.component';
import { PostDetailComponent } from './content/post/post-detail/post-detail.component';
import { LifeComponent } from './content/life/life.component';
import { AboutComponent } from './content/about/about.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/list', component: PostListComponent },
  { path: 'post/detail', component: PostDetailComponent },
  { path: 'life', component: LifeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
