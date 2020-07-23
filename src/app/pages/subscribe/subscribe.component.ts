import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  form;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', [Validators.email, Validators.required]]
    })
  }

  get email() { return this.form.get('email') }

  ngOnInit(): void {
  }

  addEmail() {
    this.http.post(BACKEND_URL + 'mails', this.form.value)
      .subscribe(data => {
        console.log(data)
      })
    this.form.value = '';
  }

}
