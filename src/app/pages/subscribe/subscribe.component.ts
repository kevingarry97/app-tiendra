import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    this.http.post('https://server-tienda.herokuapp.com/api/mails', this.form.value)
      .subscribe(data => {
        console.log(data)
      })
  }

}
