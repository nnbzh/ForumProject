import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { TOPICS } from '../database/topics-list';
import { Observable, of } from 'rxjs';
import {DISCUSSIONS} from '../database/discussions';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  topics = TOPICS;

  topicsUrl = 'api/TOPICS';
  discussionsUrl = 'api/DISCUSSIONS';

  getTopicsByDiscussionIdHttp(id: number): Observable<Topic[]> {
    const url = `${this.topicsUrl}/?discussion_id=${id}`;
    return this.http.get<Topic[]>(url);
  }

  getTopicByHttp(id: number): Observable<Topic> {
    const url = `${this.topicsUrl}/?id=${id}`;
    return this.http.get<Topic>(url);
  }

  // http ------------------------------------------------------->
  getTopic(id: number): Observable<Topic> {
    return of(TOPICS.find(topic => topic.id === id));
  }
  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }
  getDiscussionNameById(id: number): string {
    return (DISCUSSIONS.find(discussion => discussion.id === id)).name;
  }
  getTopicsByDiscussionId(id: number): Observable<Topic[]> {
    return of(TOPICS.filter(topic => topic.discussion_id === id));
  }
  incrViewCount(id): void {
    this.topics.find(film => film.id === id).views = ((TOPICS.find(film => film.id === id).views) + 1);
  }
}
