import { Component, Input } from '@angular/core';
import { Product } from '../../type/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }
}
