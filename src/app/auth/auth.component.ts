import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, ResponseData } from '../services/auth.service';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authMethod: string;
  errorMessage: string;

  @ViewChild('signUp') signUpForm: NgForm;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.router.data.subscribe((method: { authMethod: string }) => {
      this.authMethod = method.authMethod;
    });
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    let authObject: Observable<ResponseData>;

    if (this.authMethod === 'signUp') {
      authObject = this.authService.signup(this.signUpForm.value);
    } else {
      authObject = this.authService.login(this.signUpForm.value);
    }

    authObject.subscribe(
      (resData) => {
        this.route.navigateByUrl('');
        if (this.authMethod === 'login') {
          this.localStorageService.setItem('userId', resData.localId);
          this.localStorageService.setItem('authToken', resData.idToken);
        }
      },
      (error) => {
        this.errorMessage = error;
      }
    );

    this.signUpForm.resetForm();
  }
}
