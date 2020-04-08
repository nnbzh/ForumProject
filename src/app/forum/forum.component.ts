import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Topic } from '../topic';
import { TOPICS } from '../topics-list';
import { TopicService } from '../topic.service';

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
    this.topicService.getTopics()
      .subscribe(topics => this.topics = topics);
  }
  incrViewCount(id){
    this.topicService.incrViewCount(id);
  }
}
