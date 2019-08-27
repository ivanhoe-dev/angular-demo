import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName', { static: false }) ingredientName: ElementRef;
  @ViewChild('ingredientAmount', { static: false }) ingredientAmount: ElementRef;
  @Output('addIngredient') addIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addClicked() {
    this.addIngredient.emit(
      new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value)
    );
  }
}
