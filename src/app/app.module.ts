import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { BuscarObjetoPerdidoComponent } from './buscar-objeto-perdido/buscar-objeto-perdido.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EquipoComponent } from './equipo/equipo.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { PerdidosComponent } from './perdidos/perdidos.component';
import { RegistrarObjetoPerdidoComponent } from './registrar-objeto-perdido/registrar-objeto-perdido.component';

import { Routes, RouterModule } from '@angular/router';


const rutas: Routes = [
 { path: '', component: IndexComponent },
 { path: 'buscar-objeto-perdido', component: BuscarObjetoPerdidoComponent },
 { path: 'contacto',component: ContactoComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(rutas)],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, IndexComponent, BuscarObjetoPerdidoComponent, ContactoComponent, DetallesComponent, EquipoComponent, InformacionDetalladaComponent, PerdidosComponent, RegistrarObjetoPerdidoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
