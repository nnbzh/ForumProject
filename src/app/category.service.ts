import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { categories} from './categories';
import {discussions} from './discussions'

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	constructor() { }

	getCategories(): Observable<any> {
		return of(categories);
	}
	getDiscussions():Observable<any> {
		return of(discussions);
	}
}
