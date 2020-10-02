import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../data/company/companies-data.service';
import { Company } from "../../data/company/company";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  company: Company;
  id: any;
  constructor(private companyService: CompanyService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.company = this.companyService.getCompanyDetail(Number(this.id));
   }

  ngOnInit(): void {
  }

}
