import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-pizzaForm',
  templateUrl: './pizzaForm.component.html',
  styleUrls: ['./pizzaForm.component.css']
})
export class PizzaFormComponent implements OnInit {
  ingredients : string[] | undefined;
  @Input() pizza : Pizza | undefined;
  constructor(private router : Router,private route:ActivatedRoute, private pizzasService : PizzasService) { }


  ngOnInit() {
    const retrieveIdFormURL = +this.route.snapshot.params['id'];
    this.pizza = this.pizzasService.getSinglePizza(retrieveIdFormURL);
    this.ingredients = this.pizzasService.getPizzaIngredients();
  }
  hasIngredient(type:string): boolean {
    const index =this.pizza?.compositions?.indexOf(type);
    return (index !== -1) ? true : false;
  }
  selectIngredient($event : any, ingredient :string ): void{
    const checked = $event.target.checked;
    if(checked){
      this.pizza?.compositions?.push(ingredient);
    } else{
          const index = this.pizza?.compositions?.indexOf(ingredient);
             if(index && index > -1) {
            this.pizza?.compositions?.splice(index, 1);
            }
         }
  }



  onSubmit() : void {
    console.log('Submit form !');
    const lien = ['/pizza',this.pizza?.id];
    this.router.navigate(lien);
  }

  /**
   * valider le nombre d'ingredients de chaque pizza
   * @param ingredient
   * */
  isCompositionValid(ingredient:string):boolean{
    if(this.pizza?.compositions?.length === 1 && this.hasIngredient(ingredient)){
      return false;
    }
    if(this.pizza?.compositions && this.pizza?.compositions.length >= 3 && !this.hasIngredient(ingredient)){
      return false;
    }
    return true;
  }

}
