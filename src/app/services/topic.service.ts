import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { TOPICS } from '../database/topics-list';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Discussion } from '../models/discussion';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://localhost:8000';

  topics = TOPICS;

  topicsUrl = 'api/TOPICS';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTopics(id: number): Observable<Discussion> {
    const url = `${this.BASE_URL}/api/discussions/${id}/topics/`;
    return this.http.get<Discussion>(url);
  }

  getTopic(id: number): Observable<Topic> {
    const url = `${this.BASE_URL}/api/topics/${id}/`;
    return this.http.get<Topic>(url);
  }


  incrViewCount(id): void {
    this.topics.find(film => film.id === id).views = ((TOPICS.find(film => film.id === id).views) + 1);
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


}
