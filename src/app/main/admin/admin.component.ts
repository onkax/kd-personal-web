import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models/user';
import { UserService } from '@app/_services/user.service';
import { BaseComponent } from '@app/common/base.component';
import { AuthenticationService } from '@app/_services/authentication.service';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent extends BaseComponent {
    loading = false;
    users: User[] = [];

    constructor(private userService: UserService, private authenticationService: AuthenticationService) { super(authenticationService) }
    

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}