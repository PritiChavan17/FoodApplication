import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  orderForm: FormGroup;

  constructor(
    private param: ActivatedRoute, 
    private service:OrderDetailsService,
    private formBuilder: FormBuilder
    ) { }
 
  getMenuId:any;
  menuData:any;

  ngOnInit():void {
    
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    debugger
    this.getMenu();
  
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      items: ['', Validators.required]
    });
 }


 getMenu(){
  if(this.getMenuId) 
  {
   this.menuData= this.service.foodDetails.filter((value => {

   return value.id == this.getMenuId;
   }))
   console.log(this.menuData);
  }
}

  onSubmit() {
    console.log(this.orderForm.value);
  }

}
