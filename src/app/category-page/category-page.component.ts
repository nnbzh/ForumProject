import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from '../category.service';
import { Discussion } from '../discussion';
import { Category} from '../category';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  discussions: Discussion[];
  @Input() category: Category;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDiscussionsByCategoryId();
  }
  getDiscussionsByCategoryId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getDiscussionsByCategoryId(id)
      .subscribe(discussions => this.discussions = discussions);
  }
  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }
}
