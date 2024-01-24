import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  municipios:any

  constructor(private municipService: MunicipioService,
              private router: Router,
    ) { }

  ngOnInit(): void {
    this.municipService.getMunicipio().subscribe(data => {
      this.municipios = data
    });
  }

  compMunicipio(){
    this.router.navigate(['nomencladores/divisiones/municipio']);
  }

  compProv(){
    this.router.navigate(['nomencladores/divisiones/provincia']);
  }

  compDistritos(){
    this.router.navigate(['nomencladores/divisiones/distritos']);
  }

  compConsejPopulares(){
    this.router.navigate(['nomencladores/divisiones/consejos-populares']);
  }

  compCalles(){
    this.router.navigate(['nomencladores/divisiones/calles']);
  }

  compTiposOficina(){
    this.router.navigate(['nomencladores/divisiones/tipos-oficinas']);
  }

  compOCCM(){
    this.router.navigate(['nomencladores/divisiones/occm']);
  }

  compOrganismos(){
    this.router.navigate(['nomencladores/divisiones/organismos']);
  }

  eliminarMunicipio(id: number){
    this.municipService.deleteMunicipio(id).subscribe(data => {
      this.ngOnInit();
     });
  }

}
