import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Beef Wellington',
      'Delicious',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Beef_Wellington_2019.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
