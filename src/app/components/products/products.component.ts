import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../type/product';
@Component({
  selector: 'app-products',
  imports: [NgFor, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList: Product[] = [
    {
      name: 'Diamond necklace',
      image: 'diamond',
      quantity: 10,
      price: 100
    },
    {
      name: 'Pearl earrings',
      image: 'pearl',
      quantity: 5,
      price: 80
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
