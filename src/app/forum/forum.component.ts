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
  topics: Topic[];
  discussions: Discussion[];
  constructor(private topicService: TopicService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location) { }
  ngOnInit(): void {
    this.getTopicsByDiscussionId();
    this.getDiscussions();
    this.getDiscussionId();
  }

  onChangeSortDirection(orderValue) {
    const id = +this.route.snapshot.paramMap.get('id');
    if (orderValue == "asc") {
      this.topicService.getTopics(id)
      .subscribe(topics => this.topics = topics.reverse());
    } else {
      this.topicService.getTopics(id)
      .subscribe(topics => this.topics = topics.sort());
    }
  }

  getTopics(): void {
  getTopicsByDiscussionId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicsByDiscussionId(id)
      .subscribe(topics => this.topics = topics);
  }
  getDiscussionNameById(): string {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.topicService.getDiscussionNameById(id);
  }
  getCategoryNameByDiscassionId(): string {
    const discussionId = +this.route.snapshot.paramMap.get('id');
    return this.categoryService.getCategoryNameByDiscassionId(discussionId);
  }
  getCategoryIdByDiscussionId(): number {
    const discussionId = +this.route.snapshot.paramMap.get('id');
    return this.categoryService.getCategoryIdByDiscussionId(discussionId);
  }
  incrViewCount(id) {
    this.topicService.incrViewCount(id);
  }
  getDiscussions() {
    this.categoryService.getDiscussions()
      .subscribe(discussions => this.discussions = discussions);
  }
  goBack(): void {
    this.location.back();
  }
  getDiscussionId() {
    const id = +this.route.snapshot.paramMap.get('id');
    return id;
  }
}
