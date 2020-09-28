  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { MaterialModule } from "./common/material.module";

import { HomeComponent } from './main/home/home.component';
import { AdminComponent } from './main/admin/admin.component';
import { LoginComponent } from './main/login/login.component';
import { LayoutComponent } from './common/layout/layout.component';
import { HeaderComponent } from './common/navigation/header/header.component';
import { SidenavListComponent } from './common/navigation/sidenav-list/sidenav-list.component';
import { LoaderComponent } from './common/loader/loader.component';
import { LoaderInterceptor } from './_helpers/loader-interceptor.service';
import { LoaderService } from './_services/loader.service';
import { RegisterComponent } from './main/register/register.component';
import { TableOfContentsComponent } from './common/navigation/table-of-contents/table-of-contents.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContentLayoutComponent } from './common/content-layout/content-layout.component';
import { FooterComponent } from './common/navigation/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        HeaderComponent,
        LayoutComponent,
        ContentLayoutComponent,
        SidenavListComponent,
        LoaderComponent,
        RegisterComponent,
        TableOfContentsComponent,
        BlogComponent,
        FooterComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }