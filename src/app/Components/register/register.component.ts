import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.valid) {
      console.log("valid data", this.registrationForm.value);
      let data = {

        "firstName": this.registrationForm.value.FirstName,
        "lastName": this.registrationForm.value.LastName,
        "email": this.registrationForm.value.Email,
        "password": this.registrationForm.value.Password,

      }
      this.user.register(data).subscribe((result: any) => {
        console.log("register response", result);
      })


    }
    else {
      console.log("invalid data", this.registrationForm.value);
    }










  }
}