import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '@app/common/base.component';
import { AuthenticationService } from '@app/_services/authentication.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent extends BaseComponent {

  @Output() sidenavClose = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) { super(authenticationService) }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  logout() {
    this.authenticationService.logout();
}
}
