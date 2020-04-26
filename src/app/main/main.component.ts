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
  categories: Category[] = [];
  isAdmin;
  logged;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.logged = localStorage.getItem('token')
    this.isAdmin = localStorage.getItem('isAdmin')
    console.log(this.isAdmin)
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => {this.categories = categories});
  }

  getForumsCount():number {
    let cnt = 0;
    this.categories.forEach(element => {
      cnt =element.discussions.length + cnt; 
    });
    return cnt;
  }

}
