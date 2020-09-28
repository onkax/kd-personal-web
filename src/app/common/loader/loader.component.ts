import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services/authentication.service';
import { LoaderService } from '@app/_services/loader.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent extends BaseComponent {

  loading: boolean;

  constructor(private authenticationService: AuthenticationService, private loaderService: LoaderService) { super(authenticationService) 
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });

  }
  ngOnInit() {
  }

}
