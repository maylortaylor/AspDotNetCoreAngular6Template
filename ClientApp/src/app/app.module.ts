import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MaterialModule } from "./core/material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routes';
import { HttpClientService } from './core/index';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    
    // Material
    MaterialModule,
    BrowserAnimationsModule,

    // Routing
    AppRoutingModule,
  ],
  providers: [
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
