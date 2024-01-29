import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {
  singlePizza: Pizza | undefined;

  constructor(private route:ActivatedRoute, private pizzaService : PizzasService) {
  }

  ngOnInit():void {
    const retrieveIdFormURL = +this.route.snapshot.params['id'];
    this.singlePizza = this.pizzaService.getSinglePizza(retrieveIdFormURL);
    console.log("Vous avez selectioné:", this.singlePizza)
  }

}
