import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PostListComponent } from './content/post/post-list/post-list.component';
import { SinglePostComponent } from './content/post/post-list/single-post/single-post.component';
import { PostDetailComponent } from './content/post/post-detail/post-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { LifeComponent } from './content/life/life.component';
import { AboutComponent } from './content/about/about.component';
import { ManagePostListComponent } from './content/manage/manage-post-list/manage-post-list.component';
import { ManagePostDetailComponent } from './content/manage/manage-post-detail/manage-post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PostListComponent,
    SinglePostComponent,
    PostDetailComponent,
    LifeComponent,
    AboutComponent,
    ManagePostListComponent,
    ManagePostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
