import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',

})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: any = "";

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.signUpForm = fb.group({})
  }


  signUp = async () => {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value
      this.isLoading = true
      this.errorMessage = await this.auth.signUp(email, password)
      this.isLoading = false
    }
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }
}
