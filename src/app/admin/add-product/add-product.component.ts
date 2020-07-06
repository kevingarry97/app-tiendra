import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: any = [];
  subCates:any = [];
  selectSub = [];
  modifiedCategory: string;
  form;
  urls = [];
  img;
  constructor(
    private catService: CategoryService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      productName: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      availability: ['', Validators.required],
      colors: ['', Validators.required],
      caption: ['', [Validators.required, Validators.minLength(10)]],
      item: ['', Validators.required],
      tag: ['', Validators.required],
      sizes: fb.array([]),
      details: fb.array([]),
      description: ['', [Validators.required, Validators.minLength(15)]],
      amount: ['', Validators.required],
      images: (['', Validators.required])
    })
  }

  // Validations
    get productName() { return this.form.get('productName'); }
    get category() { return this.form.get('category'); }
    get subCategory() { return this.form.get('subCategory'); }
    get availability() { return this.form.get('availability') }
    get colors() { return this.form.get('colors') }
    get caption() { return this.form.get('caption') }
    get item() { return this.form.get('item') }
    get tag() { return this.form.get('tag') }
    get sizes() { return this.form.get('sizes') }
    get details() { return this.form.get('details') }
    get description() { return this.form.get('description') }
    get amount() { return this.form.get('amount') }
    get images() { return this.form.get('images') }

  ngOnInit(): void {
    this.catService.getCategory()
      .subscribe((cat) => {
        this.categories = cat
      })
    this.catService.getSubs()
      .subscribe((sub) => {
        this.subCates = sub
      })
  }

  onCategoryChanged(val: any) {
    this.customFunction(val);
    this.selectSub = (this.subCates
      .filter(item => item.category['_id'] === val)
      .map(subs => ({_id: subs['_id'], name: subs['name']})));
  }

  customFunction(val: any) {
    this.modifiedCategory = val;
  }

  saveProduct() {
    if(!this.form.valid) return;

    console.log(this.form.value);
  }

  onSelect(event) {
    if (event.target.files && event.target.files[0]) {
      this.form.patchValue({images: event.target.files});
      this.form.get('images').updateValueAndValidity()
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event:any) => {
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  addSize(size: HTMLInputElement) {
    (this.sizes as FormArray).push(new FormControl(size.value))
    size.value = '';
  }

  addDetails(detail: HTMLInputElement) {
    (this.details as FormArray).push(new FormControl(detail.value))
    detail.value = '';
  }

  removeSize(size) {
    let index = (this.sizes as FormArray).controls.indexOf(size);
    (this.sizes as FormArray).removeAt(index);
  }

  removeDetail(detail) {
    let index = (this.details as FormArray).controls.indexOf(detail);
    (this.details as FormArray).removeAt(index)
  }

}
