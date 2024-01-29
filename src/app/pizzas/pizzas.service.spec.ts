/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzasService } from './pizzas.service';

describe('Service: Pizzas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzasService]
    });
  });

  it('should ...', inject([PizzasService], (service: PizzasService) => {
    expect(service).toBeTruthy();
  }));
});
