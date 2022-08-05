import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotemailForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotemailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotemailForm.invalid) {
      return;
    }

  }

  onReset() {
    this.submitted = false;
    this.forgotemailForm.reset();
  }

}
