import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItems } from '../../type/product-item.type';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterLink,
  ],
  templateUrl: './userList.component.html',
  styleUrl: './userList.component.css'
})
export class UserListDemo {

    today = new Date();

    products:ProductItems[] = [
        { id: 1, date: this.today , quantity: 50,},
        { id: 2, date: this.today , quantity: 20,},
        { id: 3, date: this.today , quantity: 30,},
        { id: 4, date: this.today , quantity: 40,},
        { id: 5, date: this.today , quantity: 10,}
    ]

    constructor(private productService: ProductService){
      this.productService.setProduct(this.products)
    }



}
