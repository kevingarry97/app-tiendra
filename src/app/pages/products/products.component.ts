import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('myOverlay', { static: true }) myOverlay: ElementRef;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  filterOpen() {
    console.log('Clicked');
    if (this.filter.nativeElement.style.display === 'block') {
      this.filter.nativeElement.style.display = 'none';
      this.myOverlay.nativeElement.style.display = 'none';
    } else {
      this.filter.nativeElement.style.display = 'block';
      this.myOverlay.nativeElement.style.display = 'block';
    }
  }

  filterClose() {
    this.filter.nativeElement.style.display = 'none';
    this.myOverlay.nativeElement.style.display = 'none';
  }

}
