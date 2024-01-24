import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DistritosService } from 'src/app/services/distritos.service';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-update-distrito',
  templateUrl: './update-distrito.component.html',
  styleUrls: ['./update-distrito.component.css']
})
export class UpdateDistritoComponent implements OnInit {

  municipios:any
  form: FormGroup
  dist:any
  data: any
  mensaje: string = '';

  constructor(private router: Router,
              private distritoService: DistritosService,
              private fb: FormBuilder,
              private municipService: MunicipioService,
              private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id_distrito:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')]],
      nombre: ['', Validators.required],
      municipio_id: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.distritoService.getDistritoById(id).subscribe(distrito => {
      this.dist = distrito;
      this.form.patchValue(distrito);
    })

    this.municipService.getMunicipio().subscribe(datos => {
      this.municipios = datos
    });
  }


  updateDistrito(){

    if (this.form.valid) {
      this.distritoService.updateDistrito(this.dist?.id, this.form.value).subscribe(data => {
      })

      this.distritoService.getDistrito().subscribe(data => {
          this.dist = data
      });

      this.router.navigate(['nomencladores/divisiones/distritos']);
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
