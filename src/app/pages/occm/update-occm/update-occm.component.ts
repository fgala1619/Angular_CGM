import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DistritosService } from 'src/app/services/distritos.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { OccmService } from 'src/app/services/occm.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { TipoOficinaService } from 'src/app/services/tipo-oficina.service';

@Component({
  selector: 'app-update-occm',
  templateUrl: './update-occm.component.html',
  styleUrls: ['./update-occm.component.css']
})
export class UpdateOccmComponent implements OnInit {

  form: FormGroup;
  municipios: any
  tipoOficinas: any
  provincias: any
  distritos: any
  mensaje: string = '';
  occm:any

  constructor(private router: Router,
              private occmService: OccmService,
              private fb: FormBuilder,
              private municipService: MunicipioService,
              private provinciaService: ProvinciaService,
              private tipoOficinaService: TipoOficinaService,
              private distritoService: DistritosService,
              private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id_occm:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')]],
      descripcion: ['', [Validators.required, Validators.maxLength(50)]],
      direccion: ['', Validators.maxLength(50)],
      telefono: ['', [Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      tipo_oficina_id: [''],
      es_distrito: [''],
      ofic_con_distrito: [''],
      provincia_id: [''],
      municipio_id: [''],
      distrito_id: [''],
    });
  }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.occmService.getOCCMById(id).subscribe(oc => {
      this.occm = oc;
      this.form.patchValue(oc);
    })

    this.provinciaService.getProvincia().subscribe(valor => {
      this.provincias = valor
    });

    this.municipService.getMunicipio().subscribe(datos => {
      this.municipios = datos
    });

    this.tipoOficinaService.getTipoOficina().subscribe(valor1 => {
      this.tipoOficinas = valor1
    });

    this.distritoService.getDistrito().subscribe(valor2 => {
      this.distritos = valor2
    });
  }

  updateOCCM(){

    if (this.form.valid) {
      this.occmService.updateOCCM(this.occm?.id, this.form.value).subscribe(data => {
      })

      this.occmService.getOCCM().subscribe(data => {
          this.occm = data
      });

      this.router.navigate(['nomencladores/divisiones/occm']);
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
