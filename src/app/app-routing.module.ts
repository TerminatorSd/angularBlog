import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './content/post/post-list/post-list.component';
import { PostDetailComponent } from './content/post/post-detail/post-detail.component';
import { LifeComponent } from './content/life/life.component';
import { AboutComponent } from './content/about/about.component';
import { ManagePostListComponent } from './content/manage/manage-post-list/manage-post-list.component';
import { ManagePostDetailComponent } from './content/manage/manage-post-detail/manage-post-detail.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/list', component: PostListComponent },
  { path: 'post/detail', component: PostDetailComponent },
  { path: 'life', component: LifeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'manage/list', component: ManagePostListComponent },
  { path: 'manage/detail', component: ManagePostDetailComponent },
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
