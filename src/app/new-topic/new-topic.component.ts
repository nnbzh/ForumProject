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
  @Input() topic: Topic;

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
  check() {
    if (!this.newTopic || !this.newComment) {
      alert('Please, fill in all the fields!');
    } else {
      this.topic.description = this.newComment;
      const id = +this.route.snapshot.paramMap.get("id");
      this.topic.title = this.newTopic;
      this.topic.author = "admin";
      this.topic.last_author = "";
      this.topic.date = new Date();
      this.topic.unread = 0;
      this.topic.views = 0;
      this.topic.replies = 0;
      this.topic.last_date = new Date();
      this.topic.discussion_id = id;
      this.topicService.addTopic(this.topic).subscribe(topic => this.topic = topic);
      alert('You have successfully added new topic!');
      this.clear();
    }
  }
  goBack(): void {
    this.location.back();
  }

}
