import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../models/topic';
import {Comment} from '../models/topic'
import { TopicService } from '../services/topic.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
    styleUrls: ['./topic-detail.component.css']
  })
  export class TopicDetailComponent implements OnInit {
  @Input() topic: Topic;
  answer: Comment
  logged;
  isAdmin;
  commentDescription = '';
  ngModuleName: string;
  title: string;
  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private location: Location) { }

  ngOnInit(): void {
    this.getTopic();
    this.logged = localStorage.getItem('token');
    this.isAdmin = localStorage.getItem('isAdmin');
  }

  getTopic() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(id).subscribe(topic => this.topic = topic);
  }

  addComment() {
    let today = new Date();
    let date = today.toISOString().slice(0,10)
    let topic_id = +this.route.snapshot.paramMap.get('id')
    let author = localStorage.getItem('username');
    let content = this.commentDescription
    const newComment = {content,author, date, topic_id} as Comment
    console.log(newComment)
    this.topicService.addComment(newComment, topic_id).subscribe( res=> {
      this.commentDescription = '';
      window.location.reload();
    }
    );
  }

  deleteCommentary(id) {
    this.topicService.deleteCommentary(id).subscribe(res => {
      this.getTopic();
    });
  }


  // http --------------------------------------------------------------------------->

  goBack(): void {
    this.location.back();
  }

  // TODO: update later
  save(): void {
    this.topic.title=this.title;
    this.topicService.updateTopic(this.topic)
      .subscribe(topic => this.topic = topic);
      window.location.reload();
  }
}
