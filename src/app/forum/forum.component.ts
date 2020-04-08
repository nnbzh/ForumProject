import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  topics: Topic[];
  constructor(private topicService: TopicService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getTopics();
  }
  getTopics(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopics(id)
      .subscribe(topics => this.topics = topics);
  }
  incrViewCount(id) {
    this.topicService.incrViewCount(id);
  }
}
 