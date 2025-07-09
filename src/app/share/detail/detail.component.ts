import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItems } from '../../type/product-item.type';
import { UserListDemo } from '../ListDemo/userList.component';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [UserListDemo],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailDemo implements OnInit {

  @Input() products: ProductItems[] = [];

  id = '';

  productItem: ProductItems = {
    id: 0,
    date: new Date(),
    quantity: 0
  };

  constructor(private route: ActivatedRoute, private productService : ProductService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  const found = this.productService.getProductById(Number(this.id));
  if(found){
      this.productItem = found;
    }
  }




  // const found = this.productService.getProductById(Number(this.id));
  //   if (found) {
  //     this.productItem = found;
  //   }
  // }

}
