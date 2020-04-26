import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discussion } from '../models/discussion';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';
import { Topic } from '../models/topic';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }
  discussion: Discussion = null;
  topic: Topic
  title = '';
  description = '';

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.testService.getTopics().subscribe(discussion => {this.discussion = discussion});
  }

  // addTopic() {
  //   // const newTopic = this.bindViews();
  //   this.testService.addTopic(this.topic).subscribe(
  //     (data: Topic) => {
  //       console.log(data)
  //     },
  //     (error: any) => console.log(error)
  //   )
  // }
}
