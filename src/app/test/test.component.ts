import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discussion } from '../models/discussion';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }
  discussion: Discussion = null;

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.testService.getTopics().subscribe(discussion => {this.discussion = discussion});
  }
}
