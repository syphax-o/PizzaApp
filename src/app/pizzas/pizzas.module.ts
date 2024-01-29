import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPizzaComponent } from './list-pizza/list-pizza.component';
import { DetailsPizzaComponent } from './detailsPizza/detailsPizza.component';
import { BorderCardDirective } from '../shared/directives/borderCard.directive';
import { PizzaIngredientColorPipe } from '../shared/pipe/pizzaIngredientColor.pipe';
import { FormsModule } from '@angular/forms';
import { PizzaFormComponent } from './pizzaForm/pizzaForm.component';
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';



@NgModule({
  declarations: [
    ListPizzaComponent,
    DetailsPizzaComponent,
    BorderCardDirective,
    PizzaIngredientColorPipe,
    PizzaFormComponent,
    PizzaEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class PizzasModule { }
