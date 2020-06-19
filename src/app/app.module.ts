import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaqueDeposito } from './saque_deposito/saque_deposito.component';

@NgModule({
  declarations: [
    AppComponent,
    SaqueDeposito
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, SaqueDeposito]
})
export class AppModule { }
