import { Injectable } from '@angular/core';
import { Discussion } from './discussion';
import { Category } from './category';
import { CATEGORIES } from './categories';
import { DISCUSSIONS } from './discussions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categories = CATEGORIES;
  discussions = DISCUSSIONS;

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === id));
  }
  getDiscussions(): Observable<Discussion[]> {
    return of(DISCUSSIONS);
  }
  getDiscussionsByCategoryId(id: number): Observable<Discussion[]> {
    return of(DISCUSSIONS.filter(discussion => discussion.category_id === id));
  }
}
