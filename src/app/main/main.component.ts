import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../models/category';
import { Discussion } from '../models/discussion';
  import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories: Category[];
  discussions: Discussion[];

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    this.getDiscussions();
  }
  getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  getDiscussions() {
    this.categoryService.getDiscussions()
      .subscribe(discussions => this.discussions = discussions);
  }
}
