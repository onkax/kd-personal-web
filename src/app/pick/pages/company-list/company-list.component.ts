import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../data/company/companies-data.service';
import { Company } from '../../data/company/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companyList: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyList = this.companyService.getCompanies();
  }

}
