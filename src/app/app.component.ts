import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('tdForm') tdForm: NgForm;
  defaultSecretQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  defaultSelectedGender = 'female';
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    // userData: {
    // username: suggestedName,
    // email: "
    // },
    // secret: 'pet',
    // questionAnswer:''
    // gender: 'male'
    // });
    this.tdForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }
  onSubmit() {
    console.log(this.tdForm);
  }
}
