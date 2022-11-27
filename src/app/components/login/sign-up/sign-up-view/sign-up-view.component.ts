import { CustomValidationService } from './../../../../services/custom-validation.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css'],
})
export class SignUpViewComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private customValidator: CustomValidationService
  ) {}

  signUpForm: FormGroup = new FormGroup({});

  submitted: boolean = false;

  isLoading: boolean = false;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: [
        '',
        Validators.required,
        this.customValidator.userNameValidator.bind(this.customValidator),
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
    });
  }

  get signUpFormControl() {
    return this.signUpForm.controls;
  }

  signUp() {
    this.isLoading = true;
    this.submitted = true;
    if (this.signUpForm.valid) {
      console.table(this.signUpForm.value);

      const signUpData = {
        name: this.signUpForm.value.name,
        last_name: this.signUpForm.value.last_name,
        username: this.signUpForm.value.username,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      };


      this.authService.signUp(signUpData.name, signUpData.last_name, signUpData.username, signUpData.email, signUpData.password).subscribe((res) => {
        if (res.status === 201 || res.status === 200) {     
          this.isLoading = false;    
          this.router.navigate(['/']);
        } else {
          console.log('Error');
        }
      });

    } else {
      alert('Please fill all the required fields!');
      this.submitted = false;
    }
  }

}
