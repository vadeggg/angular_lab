import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.items)
    this.items = this.cartService.getItems();
  }

}
