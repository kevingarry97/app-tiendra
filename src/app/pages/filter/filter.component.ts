import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from 'src/app/admin/shared/category.service';

declare let $: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit {
  categories = [];
  subCategories = [];
  modifiedCategory = '';
  subs = [];
  constructor(private catService: CategoryService) { }

  ngOnInit(): void {
    this.catService.getCategory()
      .subscribe((cat: any[]) => {
        this.categories = cat;
      })
    this.catService.getSubs()
      .subscribe((data: any[]) => {
        this.subCategories = data;
      })
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });
  }

  custom(val) {
    this.subs = this.subCategories
      .filter(item => item.category['_id'] === val['_id']);
  }

  show(category) {
    console.log(category);
  }

}
