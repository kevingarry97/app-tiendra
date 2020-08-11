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
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuard } from './pages/shared/auth-guard.service';
import { NoAccessComponent } from './pages/no-access/no-access.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ApprovalComponent } from './admin/approval/approval.component';
import { SingleDiscountComponent } from './pages/single-discount/single-discount.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: SingleProductComponent },
  { path: 'discount/:id', component: SingleDiscountComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'shopping-cart', component: ShoppingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thank-you', component: ThankYouComponent },

  // Admin Path
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'dashboard/:id', component: ViewProductComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/approval/:id', component: ApprovalComponent },
    ],
    canActivate: [AuthGuard],
  },

  { path: 'no-access', component: NoAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
