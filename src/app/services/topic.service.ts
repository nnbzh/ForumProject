import { Injectable } from '@angular/core';
import { Topic, Comment } from '../models/topic';
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

  deleteTopic(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/topics/${id}/`);
  }

  deleteCommentary(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/comments/${id}/`);
  }

  getTopics(id: number): Observable<Topic[]> {
    const url = `${this.BASE_URL}/api/discussions/${id}/topics/`;
    return this.http.get<Topic[]>(url);
  }

  getTopic(id: number): Observable<Topic> {
    const url = `${this.BASE_URL}/api/topics/${id}/`;
    return this.http.get<Topic>(url);
  }

  getTopicsByPage(id: number, page: number): Observable<Topic[]> {
    const url = `${this.BASE_URL}/api/discussions/${id}/topics/?page=${page}`;
    return this.http.get<Topic[]>(url);
  }

  addTopic(topic: Topic): Observable<Topic> {
    const url = `${this.BASE_URL}/api/topics/`;
    return this.http.post<Topic>(url, topic, this.httpOptions);
  }

  login(username, password): Observable<any> {
    return this.http.post('http://localhost:8000/api/login/', {
      username: username,
      password: password
    });
  }

  addComment(comment: Comment, topic_id: number): Observable<Comment> {
    const url = `${this.BASE_URL}/api/topics/${topic_id}/`;
    return this.http.post<Comment>(url, comment, this.httpOptions)
  }

  incrViewCount(id): void {
    this.topics.find(film => film.id === id).views = ((TOPICS.find(film => film.id === id).views) + 1);
  }

  /** PUT: update the topic on the server */
  // TODO: update later
  updateTopic(topic: Topic): Observable<Topic> {
    const url = `${this.BASE_URL}/api/topics/${topic.id}/`;
    return this.http.put<Topic>(url, topic, this.httpOptions);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  /** POST: add a new topic to the server */
  // TODO: update later

  // http ------------------------------------------------------->


}
