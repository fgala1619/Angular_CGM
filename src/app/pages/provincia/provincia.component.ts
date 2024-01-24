import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  provincias:any

  constructor(private router: Router,
              private provinciaService: ProvinciaService
    ) { }

  ngOnInit(): void {
    this.provinciaService.getProvincia().subscribe(data => {
      this.provincias = data
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

  eliminarProvincia(id: number){
    this.provinciaService.deleteProvincia(id).subscribe(data => {
      this.ngOnInit();
     });
  }

}
