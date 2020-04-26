import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Discussion} from './models/discussion'
import { from, Observable } from 'rxjs';
import { TopicService } from './services/topic.service';
import { Topic } from './models/topic';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  
  constructor(private http: HttpClient) { }

  getTopics(): Observable<Discussion> {
    return this.http.get<Discussion>('http://localhost:8000/api/discussions/1/topics/');
  }

  // addTopic(topic: Topic): Observable<Topic> {
  //   return this.http.post('http://localhost:8000/api/topics/', topic);
  // }
}
