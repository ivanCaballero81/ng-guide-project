import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This ist a test of a Recipe', 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-Food-In-Munich_8th-jan.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
