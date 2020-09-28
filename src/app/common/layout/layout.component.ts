import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services/authentication.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseComponent {

  constructor(private authenticationService: AuthenticationService) { super(authenticationService) }

  ngOnInit(): void {
  }

}