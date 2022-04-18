import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, AuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
