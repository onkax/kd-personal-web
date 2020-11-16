import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { AdminComponent } from './main/admin/admin.component';
import { LoginComponent } from './main/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';
import { RegisterComponent } from './main/register/register.component';
import { BlogComponent } from './main/blog/blog.component';
import { CompanyListComponent } from './pick/pages/company-list/company-list.component';
import { CompanyDetailComponent } from './pick/pages/company-detail/company-detail.component';
import { AddCompanyComponent } from './pick/pages/add-company/add-company.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'companies',
        component: CompanyListComponent,
    },
    {
        path: 'company/:id',
        component: CompanyDetailComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'add-company',
        component: AddCompanyComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }