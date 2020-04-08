import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {ForumComponent} from './forum/forum.component';
import {NewTopicComponent} from './new-topic/new-topic.component';
import {TopicDetailComponent} from './topic-detail/topic-detail.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/new', component: AuthComponent},
  { path: '', component: MainComponent},
  { path: 'forum/:id/new-topic', component: NewTopicComponent },
  { path: 'topic-detail/:id', component: TopicDetailComponent },
  { path: 'forum/:id', component: ForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
