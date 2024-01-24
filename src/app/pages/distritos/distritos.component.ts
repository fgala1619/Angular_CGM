import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistritosService } from 'src/app/services/distritos.service';

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.css']
})
export class DistritosComponent implements OnInit {

  distritos:any

  constructor(private router: Router,
              private distritoService: DistritosService
  ) { }

  ngOnInit(): void {
    this.distritoService.getDistrito().subscribe(data => {
      this.distritos = data
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

  eliminarDistrito(id: number){
    this.distritoService.deleteDistrito(id).subscribe(data => {
        this.ngOnInit();
    });
  }

}
