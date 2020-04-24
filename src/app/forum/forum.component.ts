import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../models/topic';
import { TopicService } from '../services/topic.service';
import { CategoryService} from '../services/category.service';
import { Discussion } from '../models/discussion';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  discussion: Discussion;
  
  limit = 3;
  offset = 0;
  allTopics;
  topics: Topic[];

  discussions: Discussion[];
  constructor(private topicService: TopicService,
              private route: ActivatedRoute,
              private location: Location) { }
  ngOnInit(): void {
    this.limit = 3;
    this.offset = 0;
    this.getTopics();
  }
  
  getTopics() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopics(id).subscribe(discussion => this.discussion = discussion);
  }

  // ------------------------------------------------------------->Pagination, etc
  paginate() {
    this.topics = this.allTopics.slice(this.offset, this.offset + this.limit);
  }

  next() {
    this.offset = Math.min(this.offset + this.limit, this.allTopics.length);
    this.paginate();
  }

  prev() {
    this.offset = Math.max(0, this.offset - this.limit);
    this.paginate();
  }

  // onChangeSortDirection(orderValue) {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   if (orderValue === 'asc') {
  //     this.topicService.getTopicsByDiscussionId(id)
  //     .subscribe(topics => this.topics = topics.reverse());
  //   } else {
  //     this.topicService.getTopicsByDiscussionId(id)
  //     .subscribe(topics => this.topics = topics.sort());
  //   }
  // }
  
  incrViewCount(id) {
    this.topicService.incrViewCount(id);
  }
  goBack(): void {
    this.location.back();
  }
  // TODO: update later
  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.topicService.addTopic({ title } as Topic)
      .subscribe(topic => {
        this.allTopics.push(topic);
      });
  }
}
