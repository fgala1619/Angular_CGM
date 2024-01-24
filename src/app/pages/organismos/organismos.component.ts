import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganismoService } from 'src/app/services/organismo.service';

@Component({
  selector: 'app-organismos',
  templateUrl: './organismos.component.html',
  styleUrls: ['./organismos.component.css']
})
export class OrganismosComponent implements OnInit {

  organismos:any

  constructor(private router: Router,
              private organismoService: OrganismoService
  ) { }

  ngOnInit(): void {
    this.organismoService.getOrganismo().subscribe(data => {
      this.organismos = data
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

  eliminarOrganismo(id: number){
    this.organismoService.deleteOrganismo(id).subscribe(data => {
      this.ngOnInit();
    });
  }

}
