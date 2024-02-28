import { Component } from '@angular/core';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = categories;
  currentCategory : string | undefined;

  selectCategory(categoryName: string) {
    this.currentCategory = categoryName;
  }
}