import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {ForumComponent} from './forum/forum.component';
import {NewTopicComponent} from './new-topic/new-topic.component';
import {TopicDetailComponent} from './topic-detail/topic-detail.component';
import { AuthComponent } from './auth/auth.component';
import {CategoryPageComponent} from './category-page/category-page.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/new', component: AuthComponent },
  { path: 'category/:id', component: CategoryPageComponent },
  { path: 'category/:category_id/forum/:id', component: ForumComponent },
  { path: 'category/:id/forum/:id/topic-detail/:id', component: TopicDetailComponent },
  { path: 'category/:id/forum/:id/new-topic', component: NewTopicComponent },
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
