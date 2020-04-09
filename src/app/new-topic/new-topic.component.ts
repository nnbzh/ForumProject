import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {
  @Input() topic: Topic;
  constructor(
    private route: ActivatedRoute,
    private heroService: TopicService) { }

  ngOnInit(): void {
  }

} 
