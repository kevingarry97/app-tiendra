import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form;
  urls = [];
  img;
  constructor(fb: FormBuilder) {
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
      description: ['', [Validators.required, Validators.minLength(15)]]
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

  ngOnInit(): void {
  }

  onSelect(e) {
    if(e.target.files) {
      for(let i = 0; i < File.length; i++) {
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[i])
        reader.onload = (events: any) => {
          this.urls.push(events.target.results)
        }
      }
    }
  }

  selectFile(event) {
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.img = event.target.result;
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
