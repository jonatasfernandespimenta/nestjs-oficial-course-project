import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Cappuccino',
      brand: 'Frothy Coffee',
      flavors: ['fruity', 'salty'],
    }
  ]

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: number): Coffee {
    return this.coffees.find(coffee => coffee.id === id);
  }

  create(coffee: Coffee): Coffee {
    this.coffees.push(coffee);
    return coffee;
  }

  update(id: number, coffee: Coffee): Coffee {
    const index = this.coffees.findIndex(c => c.id === id);
    this.coffees[index] = coffee;
    return coffee;
  }

  delete(id: number): Coffee {
    const coffee = this.findOne(id);
    this.coffees = this.coffees.filter(c => c.id !== id);
    return coffee;
  }
}
