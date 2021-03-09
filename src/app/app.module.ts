import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NotasComponent } from './components/notas/notas.component';
import { IndicecorporalComponent } from './components/indicecorporal/indicecorporal.component';
import { SueldoComponent } from './components/sueldo/sueldo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculadoraComponent,
    NotasComponent,
    IndicecorporalComponent,
    SueldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
