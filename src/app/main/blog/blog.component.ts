import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { BaseComponent } from '@app/common/base.component';
import { TableOfContentsComponent } from '@app/common/navigation/table-of-contents/table-of-contents.component';
import { AuthenticationService } from '@app/_services/authentication.service';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent extends BaseComponent {
  @ViewChild('toc') tableOfContents: TableOfContentsComponent;

  constructor(private authenticationService: AuthenticationService) { super(authenticationService); }
}
