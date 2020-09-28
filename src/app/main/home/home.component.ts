import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models/user';
import { UserService } from '@app/_services/user.service';
import { AuthenticationService } from '@app/_services/authentication.service';
import { BaseComponent } from '@app/common/base.component';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.scss'] })

export class HomeComponent extends BaseComponent {

    constructor(private authenticationService: AuthenticationService) {
        super(authenticationService);
    }

    ngOnInit() {

    }

    public executeSelectedChange = (event) => {
        console.log(event);
    }
}