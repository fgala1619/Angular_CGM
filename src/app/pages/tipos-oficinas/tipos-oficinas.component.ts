import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoOficinaService } from 'src/app/services/tipo-oficina.service';

@Component({
  selector: 'app-tipos-oficinas',
  templateUrl: './tipos-oficinas.component.html',
  styleUrls: ['./tipos-oficinas.component.css']
})
export class TiposOficinasComponent implements OnInit {

  tipoOficinas:any

  constructor(private router: Router,
              private tipoOficinaService: TipoOficinaService,
  ) { }

  ngOnInit(): void {
    this.tipoOficinaService.getTipoOficina().subscribe(data => {
      this.tipoOficinas = data
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

  eliminarTipoOficina(id: number){
    this.tipoOficinaService.deleteTipoOficina(id).subscribe(data => {
      this.ngOnInit();
     });
  }

}
