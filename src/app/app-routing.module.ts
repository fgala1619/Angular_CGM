import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modulos/login/login.component';
import { PrincipalComponent } from './modulos/principal/principal.component';
import { NavigationComponent } from './navigation/navigation.component';
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

const routes: Routes = [
  {
    path:'iniciar-sesion',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: NavigationComponent
  },
  {
    path:'nomencladores/divisiones/provincia',
    component: ProvinciaComponent
  },
  {
    path:'nomencladores/divisiones/crear/provincia',
    component: AddProvinciaComponent
  },
  {
    path:'nomencladores/divisiones/editar/provincia/:id',
    component: UpdateProvinciaComponent
  },
  {
    path:'nomencladores/divisiones/municipio',
    component: MunicipioComponent
  },
  {
    path:'nomencladores/divisiones/crear/municipio',
    component: AddMunicipioComponent
  },
  {
    path:'nomencladores/divisiones/editar/municipio/:id',
    component: UpdateMunicipioComponent
  },
  {
    path:'nomencladores/divisiones/distritos',
    component: DistritosComponent
  },
  {
    path:'nomencladores/divisiones/crear/distritos',
    component: AddDistritoComponent
  },
  {
    path:'nomencladores/divisiones/editar/distritos/:id',
    component: UpdateDistritoComponent
  },
  {
    path:'nomencladores/divisiones/consejos-populares',
    component: ConsejosPopularesComponent
  },
  {
    path:'nomencladores/divisiones/crear/cpopular',
    component: AddCpopularComponent
  },
  {
    path:'nomencladores/divisiones/editar/cpopular/:id',
    component: UpdateCpopularComponent
  },
  {
    path:'nomencladores/divisiones/calles',
    component: CallesComponent
  },
  {
    path:'nomencladores/divisiones/crear/calle',
    component: AddCalleComponent
  },
  {
    path:'nomencladores/divisiones/editar/calle/:id',
    component: UpdateCalleComponent
  },
  {
    path:'nomencladores/divisiones/tipos-oficinas',
    component: TiposOficinasComponent
  },
  {
    path:'nomencladores/divisiones/crear/tipo-oficina',
    component: AddTipoOficinaComponent
  },
  {
    path:'nomencladores/divisiones/editar/tipo-oficina/:id',
    component: UpdateTipoOficinaComponent
  },
  {
    path:'nomencladores/divisiones/occm',
    component: OccmComponent
  },
  {
    path:'nomencladores/divisiones/crear/occm',
    component: AddOccmComponent
  },
  {
    path:'nomencladores/divisiones/editar/occm/:id',
    component: UpdateOccmComponent
  },
  {
    path:'nomencladores/divisiones/organismos',
    component: OrganismosComponent
  },
  {
    path:'nomencladores/divisiones/crear/organismo',
    component: AddOrganismoComponent
  },
  {
    path:'nomencladores/divisiones/editar/organismo/:id',
    component: UpdateOrganismoComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo:'iniciar-sesion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
