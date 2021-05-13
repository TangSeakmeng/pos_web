import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  arrUser: Array<any> = [];

  registrationForm: any;

  firstName: string = '';
  lastName: string = '';

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  firstNameChanged(event: any) {
    console.log(event.target.value)
  }

  btnSubmitClicked() {

  }

  formSubmitted(formData: any) {
    const { firstName, lastName } = formData;
    this.arrUser.push({ firstName, lastName });
    this.registrationForm.reset();
  }

}
