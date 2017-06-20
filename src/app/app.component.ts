import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')signupForm: NgForm;

  submitted = false;
  defaultSubscription = 'advanced';
  user = {
    email: '',
    subscriptionType: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);

    this.user.email = this.signupForm.value.email;
    this.user.subscriptionType = this.signupForm.value.subscriptionType;
    this.user.password = this.signupForm.value.password;
  };
}
