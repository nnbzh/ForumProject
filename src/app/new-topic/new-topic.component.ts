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
    let today = new Date()
    let id =+ this.route.snapshot.paramMap.get("id")
    let description = this.newComment
    let title = this.newTopic
    let unread = 0
    let views = 0
    let replies = 0
    let date = "2020-04-23"
    let last_date = "2020-04-23"
    let discussion_id = id;
    let last_author = "admin"
    let author = localStorage.getItem('username');
    const some = {title, description, unread, views, replies, date, last_date, author, last_author, discussion_id} as Topic
    console.log(some)
    this.topicService.addTopic(some).subscribe(res =>
      {
        (data:Topic) => console.log(data);
        (error: any) => console.log(error);
      })
      this.goBack();
  }


  check(): boolean {
    if (!this.newComment || !this.newTopic) { return false; }
    return true;
  }

  goBack(): void {
    this.location.back();
  }

}
