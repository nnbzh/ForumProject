import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { TOPICS } from '../database/topics-list';
import { Observable, of } from 'rxjs';
import {DISCUSSIONS} from "../database/discussions";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  topics = TOPICS;

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
