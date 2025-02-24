import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Order } from '../../type/product';
import { OrderItemComponent } from "../order-item/order-item.component";
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-cart',
  imports: [NgFor, OrderItemComponent, FormComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  itemList: Order[] = [
    {
      name: 'Diamond necklace',
      image: 'diamond',
      quantity: 1,
      total: 100,
      price: 100
    },
    {
      name: 'Pearl earrings',
      image: 'pearl',
      quantity: 1,
      total: 80,
      price: 80
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
