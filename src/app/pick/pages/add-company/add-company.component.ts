import { CommonModule, CurrencyPipe } from "@angular/common";
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CompanyService } from "../../data/company/companies-data.service";
import { Company } from "../../data/company/company";
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from "../../../common/modal/dialog.component";
import { InvokeFunctionExpr } from "@angular/compiler";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
  providers:[CurrencyPipe]
})
export class AddCompanyComponent implements OnInit {
  addform: FormGroup;
  company: Company;
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private router: Router, private snackBar: MatSnackBar,public dialog: MatDialog,private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {
    //var amountInCurrencyFormated = this.currencyPipe.transform(10,"USD");
    this.addform = this.formBuilder.group({
      name: ['', Validators.required],
      spend: ['', [Validators.required, this.isValidSpend]],
      max: ['', [Validators.required, this.isValidAbility]],
      min: ['', [Validators.required,this.isValidAbility]],
      notes: ['', Validators.required]
    }, { updateOn: 'blur'});

    this.addform.valueChanges.subscribe(val => {
      if (typeof val.spend === 'string' && val.spend != "") {
        const maskedVal = this.currencyPipe.transform(Number(val.spend.replace(/\$+/g, '') || 0), 'USD');
        if (val.spend !== maskedVal) {
          this.addform.patchValue({spend: maskedVal});
        }
      }
    });

  }

  isValidSpend(input: FormControl) {
    var value = input.value.replace(/\$+/g, '')
    if(value >= input.root?.value?.min && value <= input.root?.value?.max){
      return null;
    }
    else
    {
      return { invalid: true };
    }
  }

  isValidAbility(input: FormControl) {
    var max = input.root?.value?.max || 0;
    var min = input.root?.value?.min || 0;
    if(max == 0 || min == 0 || max > min){
      return null;
    }
    else
    {
      return { invalid: true };
    }
  }

  onSubmit() {
    if (this.addform.valid) {
      this.company = this.addform.value;
      this.company.ability = { max: this.addform.value.max, min: this.addform.value.min };

      var response = this.companyService.addCompany(this.company);

      if(response == true) {
        let snackBarRef = this.snackBar.open('Company added.', 'Ok' , {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.router.navigateByUrl('/companies');

      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {notes: this.addform.value.notes }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addform.patchValue({notes: result});
    });
  }

}

