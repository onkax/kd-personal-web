import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '@app/common/base.component';
import { Role } from '@app/_models/role';
import { AuthenticationService } from '@app/_services/authentication.service';

@Component({ templateUrl: './register.component.html' })
export class RegisterComponent extends BaseComponent {
  Roles: any = Object.values(Role);
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService) {
    super(authenticationService);
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

}
