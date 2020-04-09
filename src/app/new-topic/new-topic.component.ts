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
    private heroService: TopicService,
    private location: Location) { }

  ngOnInit(): void {
  }
  clear() {
    this.newTopic = '';
    this.newComment = '';
  }
  check() {
    if (!this.newTopic || !this.newComment) {
      alert('Please, write new topic name and comment!');
      this.clear();
    } else {
      alert('You were successfully added new topic!');
    }
  }
  goBack(): void {
    this.location.back();
  }

}
