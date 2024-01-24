import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';

@Component({
  selector: 'app-calles',
  templateUrl: './calles.component.html',
  styleUrls: ['./calles.component.css']
})
export class CallesComponent implements OnInit {

  calles:any

  constructor(private router: Router,
              private callesService: CallesService,

  ) { }

  ngOnInit(): void {
    this.callesService.getCalle().subscribe(data => {
      this.calles = data
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

  eliminarCalle(id: number){
    this.callesService.deleteCalle(id).subscribe(data => {
      this.ngOnInit();
    });
  }

}
