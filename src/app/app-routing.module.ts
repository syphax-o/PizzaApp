import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPizzaComponent } from './pizzas/detailsPizza/detailsPizza.component';
import { ListPizzaComponent } from './pizzas/list-pizza/list-pizza.component';
import { PizzaEditComponent } from './pizzas/pizza-edit/pizza-edit.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'pizzas',component: ListPizzaComponent},
  {path:'pizzas/edit/:id',component:PizzaEditComponent},
  {path:'pizzas/:id',component:DetailsPizzaComponent},
  {path:'',redirectTo:'pizzas',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
