import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItems } from '../../type/product-item.type';
import { UserListDemo } from '../ListDemo/userList.component';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [UserListDemo],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailDemo {

  @Input() products: ProductItems[] = []; 
  

  id = '';

  productItem: ProductItems = {
    id: 0,
    date: new Date(),
    quantity: 0
  };

  constructor(private route: ActivatedRoute) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    
    
    const found = this.products.find((p: ProductItems) => p.id === Number(this.id));
    console.log('11',found)
    console.log(this.productItem);
    if (found) {
      this.productItem = found;
      
    } else {
      console.log('0', this.id);
    }
  }
}
