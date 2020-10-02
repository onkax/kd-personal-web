import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ok } from 'assert';

import { Company, SpendAbility } from './company';
import { CompanyList } from './company-data';

@Injectable()
export class CompanyService {

    snackBarSettings: MatSnackBarConfig<any> = {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      };

    constructor(private snackBar: MatSnackBar) { }

    getCompanies(): Company[] {
        return CompanyList;
    }

    getCompanyDetail(id: number): Company {
        return CompanyList.find(company => company.id === id);
    }

    addCompany(company: Company): any {
        if (company == null || company == undefined || company.name == undefined || company.name == '') return false;

        var isExist = this.isCompanyExist(company.name);
        if(isExist) {
            this.showMessage("There is already a company with the same name!");
            return false;
        }

        var isValidSpent = this.validateSpend(company.spend.toString(), company.ability);
        if(!isValidSpent) {
            this.showMessage("Please enter valid spend information");
            return false;
        }

        company.id = Math.floor((Math.random() * 1000) + 1);
        CompanyList.push(company);
        return true;
    }

    private validateSpend(spend: string, ability: SpendAbility): boolean{
        return (ability != undefined && ability.max != undefined && ability.min != undefined && Number(ability.max) > Number(ability.min) && Number(ability.max) > Number(spend.replace(/\$+/g, '')) && Number(spend.replace(/\$+/g, '')) > Number(ability.min));
    }

    private isCompanyExist(name: string){
        return CompanyList.find(company => company.name.toLowerCase() == name.toLowerCase()) != undefined;
    }

    private showMessage(message: string){
        let snackBarRef = this.snackBar.open(message, 'Ok' , this.snackBarSettings);
    }
}