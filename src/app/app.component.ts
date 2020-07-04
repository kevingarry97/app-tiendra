import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // form;
  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     sizes: fb.array([])
  //   });
  // }

  // addSize(input: HTMLInputElement) {
  //   (this.form.get('sizes') as FormArray).push(new FormControl(input.value))
  //   input.value = '';
  // }

  // login() {
  //   console.log(this.form.value);
  // }
}
