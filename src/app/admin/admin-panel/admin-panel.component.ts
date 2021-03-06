import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/modules/category';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/pages/shared/auth.service';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  read: number;
  form;
  categories: Category[] = [];
  errorMsg;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private catService: CategoryService,
    private orderService: OrdersService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      categoryId: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  // Getters
  get category() { return this.form.get('category') }
  get name() { return this.form.get('name') }

  ngOnInit() {
    this.catService.getCategory()
      .subscribe((data: Category[]) => {
        this.categories = data;
      })

      this.orderService.getOrders()
      .subscribe((data: any) => {
        this.read = 0
        for (const item of data) {
          if(item['status'] === 'Pending')
            this.read++;
        }
      })
  }

  addCategory(input: HTMLInputElement) {
    const category: Category = {
      name: input.value
    }
    input.value = '';
    this.catService.addCategory(category)
      .subscribe()
  }

  addSub() {
    this.catService.addSubs(this.form.value)
      .subscribe(data => {
        console.log(data);
      })
  }
}
