import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from '../services/category.service';
import { Discussion } from '../models/discussion';
import { Category} from '../models/category';
import {CATEGORIES} from '../database/categories';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  @Input() category: Category;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    const id= +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
}
