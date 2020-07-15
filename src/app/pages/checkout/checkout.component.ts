import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carts;
  form
  constructor(
    private router: Router,
    private cartService: ShoppingCartService,
    fb: FormBuilder
  ) {
    this.cartService.getCart()
    this.form = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      adress1: ['', Validators.required],
      country: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      phone: ['', [Validators.required]],
      textId: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }

  get firstName() { return this.form.get('firstName')}
  get lastName() { return this.form.get('lastName')}
  get email() { return this.form.get('email')}
  get adress1() { return this.form.get('adress1')}
  get country() { return this.form.get('country')}
  get city() { return this.form.get('city')}
  get phone() { return this.form.get('phone')}
  get textId() { return this.form.get('textId')}


  ngOnInit(): void {
    this.cartService.carts$
      .subscribe((data: any) => {
        this.carts = data;
      })
  }

  saveOrder() {
    this.cartService.createOrder(this.form.value)
    this.router.navigate(['/home'])
  }

}
