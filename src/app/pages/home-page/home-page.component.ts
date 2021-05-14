import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserStore } from 'src/app/stores/user.store';

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
    private formBuilder: FormBuilder,
    private userStore: UserStore,
  ) {
    this.registrationForm = formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
    }, {
      validators: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    return this.userStore.getUsers().subscribe((res: any) => {
      this.arrUser = res;
    })
  }

  firstNameChanged(event: any) {
    console.log(event.target.value)
  }

  btnSubmitClicked() {

  }

  formSubmitted(formData: any) {
    if (this.registrationForm.valid) {
      this.userStore.addUser({
        ...formData,
        photoFilePath: formData.photo,
        photoDownloadUrl: formData.photo,
      }).subscribe((res: {}) => {
        this.arrUser.push(res);
        this.registrationForm.reset();
      })
    }

    return;
  }

}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}