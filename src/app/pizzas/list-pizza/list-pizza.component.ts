import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/list.pizza';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.css']
})
export class ListPizzaComponent implements OnInit {

  PIZZAS: Pizza[] | undefined;
  constructor(private router: Router, private pizzasService : PizzasService) { }

  ngOnInit() : void{
    this.PIZZAS = this.pizzasService.getListPizzas();
  }
  selectPizza(selectedPizza: Pizza): void{
   // alert('Vous avez selectionné:'+ selectedPizza.name);
   const link = [ 'pizzas', selectedPizza.id];
   console.log(link)
    this.router.navigate(link);
  }
}






