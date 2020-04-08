import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';
import { CategoryService} from '../category.service';
import { Discussion } from '../discussion';

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
    this.getTopics();
    this.getDiscussions();
    this.getDiscussionId();
  }
  getTopics(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopics(id)
      .subscribe(topics => this.topics = topics);
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
