import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { Crud1Component } from './components/pages/crud1/crud1.component';
import { Crud2Component } from './components/pages/crud2/crud2.component';
import { Crud3Component } from './components/pages/crud3/crud3.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Crud1Component,
    Crud2Component,
    Crud3Component,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
