import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './content/post/post-list/post-list.component';
import { PostDetailComponent } from './content/post/post-detail/post-detail.component';
import { ReadingComponent } from './content/reading/reading.component';
import { AboutComponent } from './content/about/about.component';
import { ManagePostListComponent } from './content/manage/post/manage-post-list/manage-post-list.component';
import { ManagePostDetailComponent } from './content/manage/post/manage-post-detail/manage-post-detail.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/list', component: PostListComponent },
  { path: 'post/detail/:id', component: PostDetailComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'manage/list', component: ManagePostListComponent },
  { path: 'manage/detail/:id', component: ManagePostDetailComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
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
