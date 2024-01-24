import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-update-municipio',
  templateUrl: './update-municipio.component.html',
  styleUrls: ['./update-municipio.component.css']
})
export class UpdateMunicipioComponent implements OnInit {

  provincias:any
  form: FormGroup
  municip:any
  data: any
  mensaje: string = '';

  constructor(private municipService: MunicipioService,
              private router: Router,
              private provService: ProvinciaService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id_municipio:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      provincia_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.municipService.getMunicipioById(id).subscribe(municipio => {
      this.municip = municipio;
      this.form.patchValue(municipio);
    })

    this.provService.getProvincia().subscribe(datos => {
      this.provincias = datos
    });
  }

  updateMunicipio(){
    // this.data = this.form.value
    // this.municip.id_municipio = this.data.id_municipio
    // this.municip.nombre = this.data.nombre
    // this.municip.provincia_id = this.data.provincia_id

    if (this.form.valid) {
      this.municipService.updateMunicipio(this.municip?.id, this.form.value).subscribe(data => {

      })

      this.municipService.getMunicipio().subscribe(data => {
        this.municip = data
      });

      this.router.navigate(['nomencladores/divisiones/municipio']);
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}


