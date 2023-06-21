import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaDonacionesComponent } from './lista-donaciones/lista-donaciones.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lista-donaciones', component: ListaDonacionesComponent },
  { path: 'datos-contacto', component: DatosContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }