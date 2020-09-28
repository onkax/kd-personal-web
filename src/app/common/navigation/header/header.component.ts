import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '@app/common/base.component';
import { AuthenticationService } from '../../../_services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) { super(authenticationService) }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  logout() {
    this.authenticationService.logout();
  }
}
