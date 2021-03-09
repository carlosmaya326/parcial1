import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { IndicecorporalComponent } from './components/indicecorporal/indicecorporal.component';
import { NotasComponent } from './components/notas/notas.component';
import { SueldoComponent } from './components/sueldo/sueldo.component';

const routes: Routes = [
  { path: "", component: CalculadoraComponent },
  { path: "calculadora", component: CalculadoraComponent },
  { path: "notas", component: NotasComponent },
  { path: "indiceCorporal", component: IndicecorporalComponent },
  { path: "sueldo", component: SueldoComponent }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
