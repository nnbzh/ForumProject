import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Discussion} from './models/discussion'
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Discussion> {
    return this.http.get<Discussion>('http://localhost:8000/api/discussions/1/topics/');
  }
}
