import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/list.pizza';
import { PizzasService } from '../pizzas.service';


@Component({
  selector: 'app-detailsPizza',
  templateUrl: './detailsPizza.component.html',
  styleUrls: ['./detailsPizza.component.css']
})
export class DetailsPizzaComponent implements OnInit {
  pizzaToDisplay: Pizza | undefined;
  listOfPizzas: Pizza[] | undefined;

  constructor(private router: Router ,private route: ActivatedRoute, private pizzasService : PizzasService) { }

  ngOnInit():void {
  const retrieveIdFormURL = +this.route.snapshot.params['id'];
  this.pizzaToDisplay= this.pizzasService.getSinglePizza(retrieveIdFormURL);
  console.log('Pizza Selectionée :',this.pizzaToDisplay);

  }
  goBack():void{
    this.router.navigate(['/pizzas']);
  }
  editPizza(pizzaToEdit: Pizza): void{
     const link = ["pizzas/edit/"+ pizzaToEdit.id];
     this.router.navigate(link);
  }

}
