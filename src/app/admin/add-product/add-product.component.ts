import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { CategoryService } from '../shared/category.service';
import { ProductService } from '../shared/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: any = [];
  subCates:any = [];
  selectSub = [];
  relateId: string;
  modifiedCategory: string;
  form;
  urls = [];
  images = [];
  imageForm;
  constructor(
    private http: HttpClient,
    private router: Router,
    private productService: ProductService,
    private catService: CategoryService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      productName: ['', [Validators.required, Validators.minLength(5)]],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      availability: ['', Validators.required],
      colors: ['', Validators.required],
      caption: ['', [Validators.required, Validators.minLength(10)]],
      item: ['', Validators.required],
      owner: ['', Validators.required],
      tag: ['', Validators.required],
      sizes: fb.array([]),
      details: fb.array([]),
      description: ['', [Validators.required, Validators.minLength(15)]],
      amount: ['', Validators.required]
    });
    this.imageForm = fb.group({
      image: ['', Validators.required]
    })
  }

  // Validations
    get productName() { return this.form.get('productName'); }
    get categoryId() { return this.form.get('categoryId'); }
    get subCategoryId() { return this.form.get('subCategoryId'); }
    get availability() { return this.form.get('availability') }
    get colors() { return this.form.get('colors') }
    get caption() { return this.form.get('caption') }
    get owner() { return this.form.get('owner') }
    get item() { return this.form.get('item') }
    get tag() { return this.form.get('tag') }
    get sizes() { return this.form.get('sizes') }
    get details() { return this.form.get('details') }
    get description() { return this.form.get('description') }
    get amount() { return this.form.get('amount') }

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

    this.productService.addProduct(this.form.value)
      .subscribe((data) => {
        console.log(data)
        this.relateId = data['_id']
      })
  }

  onSelect(event) {
    if(event.target.files.length > 0) {
      this.images = event.target.files
      this.imageForm.patchValue({image: event.target.files});
      this.imageForm.get('image').updateValueAndValidity()
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

  onSave() {
    let formData = new FormData()
    for(let img of this.images) {
      formData.append('files', img)
    }
    formData.append('productId', this.relateId)

      this.http.post('https://server-tienda.herokuapp.com/api/upload-images', formData)
      .subscribe(data => {
        console.log(data)
      })
    this.router.navigate(['/admin'])
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
