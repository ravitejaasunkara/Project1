import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { LayoutdetailsComponent } from './layoutdetails/layoutdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    WildcardComponent,
    LayoutdetailsComponent
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
