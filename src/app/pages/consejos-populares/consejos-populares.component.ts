import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CpopularService } from 'src/app/services/cpopular.service';

@Component({
  selector: 'app-consejos-populares',
  templateUrl: './consejos-populares.component.html',
  styleUrls: ['./consejos-populares.component.css']
})
export class ConsejosPopularesComponent implements OnInit {

  cpopulares:any

  constructor(private router: Router,
              private cpopularService: CpopularService,
  ) { }

  ngOnInit(): void {
    this.cpopularService.getCpopular().subscribe(data => {
      this.cpopulares = data
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

  eliminarCpopular(id: number){

    this.cpopularService.deleteCpopular(id).subscribe(data => {
      this.ngOnInit();
     });

 }

}
