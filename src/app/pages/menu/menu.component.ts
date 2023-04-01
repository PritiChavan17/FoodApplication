import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }

  foodDetails:any;
  ngOnInit() {
    this.foodDetails=this.service.foodDetails;
  }

}
