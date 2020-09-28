import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services/authentication.service';

@Component({
    template: ''
})
export class BaseComponent implements OnInit {

    isAuthenticated: boolean;

    constructor(authenticationService: AuthenticationService) {
        authenticationService.user.subscribe(user => {
            this.isAuthenticated = user != undefined && user != null && user.token != '';
        });
    }
    ngOnInit(): void {
        
    }
}