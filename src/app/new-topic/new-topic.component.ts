import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../models/topic';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  private topic: Topic = null;
  public newTopic = '';
  public newComment = '';

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private location: Location) { }

  ngOnInit(): void {
  }

  clear() {
    this.newTopic = '';
    this.newComment = '';
  }

  addTopic() {
    const today = new Date();
    const id = + this.route.snapshot.paramMap.get('id');
    const description = this.newComment;
    const title = this.newTopic;
    const unread = 0;
    const views = 0;
    const replies = 0;
    const date = '2020-04-23';
    const last_date = '2020-04-23';
    const discussion_id = id;
    const last_author = 'admin';
    const author = 'admin';
    const some = {title, description, unread, views, replies, date, last_date, author, last_author, discussion_id} as Topic;
    console.log(some);
    this.topicService.addTopic(some).subscribe(res => {
        (data: Topic) => console.log(data);
        (error: any) => console.log(error);
      });
  }


  check(): boolean {
    if (!this.newComment || !this.newTopic) { return false; }
    return true;
  }

  goBack(): void {
    this.location.back();
  }

}
