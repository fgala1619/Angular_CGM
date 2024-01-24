import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrincipalComponent } from './modulos/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
import { ProvinciaComponent } from './pages/provincia/provincia.component';
import { AddProvinciaComponent } from './pages/provincia/add-provincia/add-provincia.component';
import { UpdateProvinciaComponent } from './pages/provincia/update-provincia/update-provincia.component';
import { MunicipioComponent } from './pages/municipio/municipio.component';
import { AddMunicipioComponent } from './pages/municipio/add-municipio/add-municipio.component';
import { UpdateMunicipioComponent } from './pages/municipio/update-municipio/update-municipio.component';
import { DistritosComponent } from './pages/distritos/distritos.component';
import { AddDistritoComponent } from './pages/distritos/add-distrito/add-distrito.component';
import { UpdateDistritoComponent } from './pages/distritos/update-distrito/update-distrito.component';
import { ConsejosPopularesComponent } from './pages/consejos-populares/consejos-populares.component';
import { AddCpopularComponent } from './pages/consejos-populares/add-cpopular/add-cpopular.component';
import { UpdateCpopularComponent } from './pages/consejos-populares/update-cpopular/update-cpopular.component';
import { CallesComponent } from './pages/calles/calles.component';
import { AddCalleComponent } from './pages/calles/add-calle/add-calle.component';
import { UpdateCalleComponent } from './pages/calles/update-calle/update-calle.component';
import { TiposOficinasComponent } from './pages/tipos-oficinas/tipos-oficinas.component';
import { AddTipoOficinaComponent } from './pages/tipos-oficinas/add-tipo-oficina/add-tipo-oficina.component';
import { UpdateTipoOficinaComponent } from './pages/tipos-oficinas/update-tipo-oficina/update-tipo-oficina.component';
import { OccmComponent } from './pages/occm/occm.component';
import { AddOccmComponent } from './pages/occm/add-occm/add-occm.component';
import { UpdateOccmComponent } from './pages/occm/update-occm/update-occm.component';
import { OrganismosComponent } from './pages/organismos/organismos.component';
import { AddOrganismoComponent } from './pages/organismos/add-organismo/add-organismo.component';
import { UpdateOrganismoComponent } from './pages/organismos/update-organismo/update-organismo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    NavigationComponent,
    DashComponent,
    ProvinciaComponent,
    AddProvinciaComponent,
    UpdateProvinciaComponent,
    MunicipioComponent,
    AddMunicipioComponent,
    UpdateMunicipioComponent,
    DistritosComponent,
    AddDistritoComponent,
    UpdateDistritoComponent,
    ConsejosPopularesComponent,
    AddCpopularComponent,
    UpdateCpopularComponent,
    CallesComponent,
    AddCalleComponent,
    UpdateCalleComponent,
    TiposOficinasComponent,
    AddTipoOficinaComponent,
    UpdateTipoOficinaComponent,
    OccmComponent,
    AddOccmComponent,
    UpdateOccmComponent,
    OrganismosComponent,
    AddOrganismoComponent,
    UpdateOrganismoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
