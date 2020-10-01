import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CompanyService } from "../../data/company/companies-data.service";
import { Company } from "../../data/company/company";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  loginForm: FormGroup;
  company: Company;
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.companyService.addCompany(this.company);
    }
  }
}
