import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../models/topic';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  topic: Topic;
  pageID:number;
  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private location: Location) { }

  ngOnInit(): void {
    this.getTopicByHttp();
    this.getPageId();
  }

  getPageId() {
    this.pageID = +this.route.snapshot.paramMap.get('id');
    
  }
  getTopicByHttp() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicByHttp(id).subscribe(topic=>this.topic = topic);
  }

  // http --------------------------------------------------------------------------->

  getTopic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(id)
      .subscribe(topic => this.topic = topic);
  }
  goBack(): void {
    this.location.back();
  }

}
