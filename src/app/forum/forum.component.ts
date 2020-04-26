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
  authUser;
  isAdmin;
  logged;
  discussion: Discussion;

  limit = 3;
  offset = 0;
  allTopics;
  topics: Topic[];
  category_id: string;
  discussion_id: string;
  page: number;

  discussions: Discussion[];
  constructor(private topicService: TopicService,
              private route: ActivatedRoute,
              private location: Location) { }
  ngOnInit(): void {
    this.limit = 3;
    this.offset = 0;
    this.page = 1;
    this.getTopics();
    this.category_id= this.route.snapshot.paramMap.get('category_id');
    this.discussion_id= this.route.snapshot.paramMap.get('id');

    this.isAdmin = localStorage.getItem('isAdmin');
    this.logged = localStorage.getItem('token');
    this.authUser = localStorage.getItem('username');
  }

  getTopics() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopics(id).subscribe(topics => this.topics = topics);
  }

  toDetail(){
    const category_id = +this.route.snapshot.paramMap.get('category_id');

  }

  // ------------------------------------------------------------->Pagination, etc
  paginate() {
    this.topics = this.allTopics.slice(this.offset, this.offset + this.limit);
  }

  next(page: number){
    if(this.page < this.topics.length){
    this.page= page +1;

    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicsByPage(id, page).subscribe(topics => this.topics = topics);
    console.log(page);
    }
    else if(this.page == this.topics.length){
      const id = +this.route.snapshot.paramMap.get('id');
      this.topicService.getTopicsByPage(id, page).subscribe(topics => this.topics = topics);
      console.log(page);
      }
     console.log(this.topics.length);
  }

  prev(page: number) {
    if(this.page > 1){
    this.page = page-1;
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicsByPage(id, page).subscribe(topics => this.topics = topics);
    console.log(page);
    }
    if(this.page == 1 ){
    // this.page= page +1;
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicsByPage(id, page).subscribe(topics => this.topics = topics);
    console.log(page);
    }

  }

  deleteTopic(id) {
    this.topicService.deleteTopic(id).subscribe(res => {
      this.getTopics();
    });
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
