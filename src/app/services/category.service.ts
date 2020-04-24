import { Injectable } from '@angular/core';
import { Discussion } from '../models/discussion';
import { Category } from '../models/category';
import { CATEGORIES } from '../database/categories';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  
  categories = CATEGORIES;


  getCategories() {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }
  
  getCategory(id: number): Observable<Category> {
    const url = `${this.BASE_URL}/api/categories/${id}/`;
    return this.http.get<Category>(url);
  }
  
}
