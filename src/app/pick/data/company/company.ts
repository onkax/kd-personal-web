export class Company {
    id: number;
    name: string;
    spend: string;
    currency: string;
    ability: SpendAbility;
    notes: string;
}

export class SpendAbility{
    max: number;
    min: number;
}