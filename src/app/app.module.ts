import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
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
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
