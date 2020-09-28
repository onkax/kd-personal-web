import { Password } from './password';
import { Person } from './person';
import { Role } from "./role";

export class User {
userId:string;
username:string;
password:Password;
person: Person;
role:Role;
token:string;
}