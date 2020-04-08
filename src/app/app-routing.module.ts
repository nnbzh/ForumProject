import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {ForumComponent} from './forum/forum.component';
import {NewTopicComponent} from './new-topic/new-topic.component';
import {TopicDetailComponent} from './topic-detail/topic-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forum', component: ForumComponent },
  { path: '', component: MainComponent},
  { path: 'new-topic', component: NewTopicComponent },
  { path: 'topic-detail/:id', component: TopicDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
