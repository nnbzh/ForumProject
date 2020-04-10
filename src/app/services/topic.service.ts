import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { TOPICS } from '../database/topics-list';
import { Observable, of } from 'rxjs';
import {DISCUSSIONS} from '../database/discussions';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  topics = TOPICS;

  topicsUrl = 'api/TOPICS';
  discussionsUrl = 'api/DISCUSSIONS';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTopicsByDiscussionIdHttp(id: number): Observable<Topic[]> {
    const url = `${this.topicsUrl}/?discussion_id=${id}`;
    return this.http.get<Topic[]>(url);
  }

  getTopicByHttp(id: number): Observable<Topic> {
    const url = `${this.topicsUrl}/?id=${id}`;
    return this.http.get<Topic>(url);
  }
  /** PUT: update the topic on the server */
  // TODO: update later
  updateHero(topic: Topic): Observable<any> {
    return this.http.put(this.topicsUrl, topic, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  /** POST: add a new topic to the server */
  // TODO: update later
  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.topicsUrl, topic, this.httpOptions).pipe(
      catchError(this.handleError<Topic>('addTopic'))
    );
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
