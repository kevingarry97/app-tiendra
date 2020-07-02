import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/add-product/add-product.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: SingleProductComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'shopping-cart', component: ShoppingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thank-you', component: ThankYouComponent },

  // Admin Path
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-product', component: AddProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
