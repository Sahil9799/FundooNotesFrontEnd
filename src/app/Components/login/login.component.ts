import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      console.log("valid data", this.loginForm.value);
      let data ={
        "email":this.loginForm.value.email,
        "password": this.loginForm.value.password
      }
      this.user.login(data).subscribe((res: any)=>{
          console.log('token', res.data);
          localStorage.setItem('token', res.data);
      })
    }
    else{
      console.log("invalid data", this.loginForm.value);
    }

  }

}



