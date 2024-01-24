import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OccmService } from 'src/app/services/occm.service';

@Component({
  selector: 'app-occm',
  templateUrl: './occm.component.html',
  styleUrls: ['./occm.component.css']
})
export class OccmComponent implements OnInit {

  occms:any

  constructor(private router: Router,
              private occmService: OccmService,
  ) { }

  ngOnInit(): void {
    this.occmService.getOCCM().subscribe(data => {
      this.occms = data
    });
  }

  compProv(){
    this.router.navigate(['nomencladores/divisiones/provincia']);
  }

  compMunicipio(){
    this.router.navigate(['nomencladores/divisiones/municipio']);
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

  eliminarOCCM(id: number){
    this.occmService.deleteOCCM(id).subscribe(data => {
      this.ngOnInit();
  });
  }

}
