import { Injectable } from '@angular/core';
import { Topic } from './topic';
import { TOPICS } from './topics-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  topics = TOPICS;
 
  getTopics(id: number): Observable<Topic[]> {
    return of(TOPICS.filter(topic=>topic.discusision_id === id));
  }
  getTopic(id: number): Observable<Topic> {
    return of(TOPICS.find(topic => topic.id === id));
  }
  incrViewCount(id): void {
    this.topics.find(film => film.id === id).views = ((TOPICS.find(film => film.id === id).views) + 1);
  }
}
