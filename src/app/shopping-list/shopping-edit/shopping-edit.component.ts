import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number = 0;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  addItem() {
    this.shoppingService.addnewIng(new Ingredient(this.name, this.amount));
  }

  deleteItem() {
    this.shoppingService.deleteIng(new Ingredient(this.name, this.amount));
  }
  clearInput() {
    this.name = '';
    this.amount = 0;
  }
}
