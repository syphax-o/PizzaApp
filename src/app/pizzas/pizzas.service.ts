import { Injectable } from '@angular/core';
import { Pizza } from '../Pizza';
import { LIST_PIZZAS } from '../shared/list.pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

constructor() { }
getListPizzas():Pizza[]{
 return LIST_PIZZAS;
}
getSinglePizza(id: number): Pizza|undefined{
  const listPizzas = this.getListPizzas();
  return listPizzas.find(Pizza => Pizza.id === id);
}
getPizzaIngredients(): string[] {
  return ['S. tomate', 'v. kebab', 'roquette', 'piments','miel', 'C. fraîche', 'v. hachée', 'S.barbecue', 'champignons',
  'merguez', 'mozzarella', 'oignons'];
}
}
