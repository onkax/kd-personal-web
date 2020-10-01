import { Injectable } from '@angular/core';
import { ok } from 'assert';

import { Company, SpendAbility } from './company';
import { CompanyList } from './company-data';

@Injectable()
export class CompanyService {

    constructor() { }

    getCompanies(): Company[] {
        return CompanyList;
    }

    getCompanyDetail(id: number): Company {
        return CompanyList.find(company => company.id === id);
    }

    addCompany(company: Company): any {
        if (company == null || company == undefined || company.name == undefined || company.name == '') return false;
        
        var isValidSpent = this.validateSpend(company.spend, company.ability);

        if(!isValidSpent) return Error("Please enter valid spend information");

        company.id = Math.floor((Math.random() * 1000) + 1);
        CompanyList.push(company);
        return ok({},"Company added");
    }

    private validateSpend(spend: number, ability: SpendAbility): boolean{
        return (ability != undefined && ability.max != undefined && ability.min != undefined && ability.max > ability.min && ability.max > spend && spend > ability.min);
    }
}