import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductsComponent } from './pages/products/products.component';
import { FilterComponent } from './pages/filter/filter.component';
import { BannerComponent } from './pages/banner/banner.component';
import { FlashProductComponent } from './pages/flash-product/flash-product.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MediaComponent } from './pages/media/media.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { NoAccessComponent } from './pages/no-access/no-access.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ApprovalComponent } from './admin/approval/approval.component';
import { BarChartComponent } from './admin/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SingleProductComponent,
    ReviewsComponent,
    SubscribeComponent,
    IndexComponent,
    ProductsComponent,
    FilterComponent,
    BannerComponent,
    FlashProductComponent,
    GalleryComponent,
    MediaComponent,
    CheckoutComponent,
    ThankYouComponent,
    ShoppingComponent,
    SignInComponent,
    AdminPanelComponent,
    AddProductComponent,
    DashboardComponent,
    NoAccessComponent,
    ProductCardComponent,
    ViewProductComponent,
    OrdersComponent,
    ApprovalComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
