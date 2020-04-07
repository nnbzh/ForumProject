import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories: any;
  discussions: any;

  constructor(
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getDiscussions();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
  getDiscussions() {
    this.categoryService.getDiscussions().subscribe(discussions=>this.discussions = discussions)
  }

}
