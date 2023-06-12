//import { HttpClientModule } from '@angular/common/http';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';

//@NgModule({
//declarations: [
//  AppComponent
//],
//imports: [
//  BrowserModule, HttpClientModule
//],
//providers: [],
//bootstrap: [AppComponent]
//})
//export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TradingviewWidgetModule } from 'tradingview-widget'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TradingviewWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
