import { Injectable } from '@angular/core';
import { Discussion } from '../models/discussion';
import { Category } from '../models/category';
import { CATEGORIES } from '../database/categories';
import { DISCUSSIONS } from '../database/discussions';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  categoriesUrl = 'api/CATEGORIES';
  discussionsUrl = 'api/DISCUSSIONS'

  categories = CATEGORIES;
  discussions = DISCUSSIONS;

  getCategoriesByHttp() {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getDiscussionsByHttp() {
    return this.http.get<Discussion[]>(this.discussionsUrl);
  }
  
  getDiscussionsByCategoryIdHttp(id: number): Observable<Discussion[]> {
    const url = `${this.discussionsUrl}/?category_id=${id}`;
    return this.http.get<Discussion[]>(url);
  }

// http --------------------------------------------------------------->
  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === id));
  }
  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
  getCategoryNameById(id: number): string {
    return (CATEGORIES.find(category => category.id === id)).name;
  }
  getCategoryNameByDiscassionId(id: number): string {
    const catId = DISCUSSIONS.find(discussion => discussion.id === id).category_id;
    return (CATEGORIES.find(category => category.id === catId)).name;
  }
  getCategoryIdByDiscussionId(id: number): number {
    const catId = DISCUSSIONS.find(discussion => discussion.id === id).category_id;
    return catId;
  }
  getDiscussion(id: number): Observable<Discussion> {
    return of(DISCUSSIONS.find(discussion => discussion.id === id));
  }
  getDiscussions(): Observable<Discussion[]> {
    return of(DISCUSSIONS);
  }
  getDiscussionsByCategoryId(id: number): Observable<Discussion[]> {
    return of(DISCUSSIONS.filter(discussion => discussion.category_id === id));
  }
}
