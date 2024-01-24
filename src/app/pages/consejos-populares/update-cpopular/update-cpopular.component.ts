import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CpopularService } from 'src/app/services/cpopular.service';
import { DistritosService } from 'src/app/services/distritos.service';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-update-cpopular',
  templateUrl: './update-cpopular.component.html',
  styleUrls: ['./update-cpopular.component.css']
})
export class UpdateCpopularComponent implements OnInit {

  cpopular: any
  form!: FormGroup;
  municipios: any
  distritos: any
  mensaje: string = '';

  constructor(private cpopularService: CpopularService,
              private router: Router,
              private municipService: MunicipioService,
              private distritoService: DistritosService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id_cpopular:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      municipio_id: ['', Validators.required],
      distrito_id: [''],
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.cpopularService.getCpopularById(id).subscribe(consejo => {
      this.cpopular = consejo;
      this.form.patchValue(consejo);
    })

    this.municipService.getMunicipio().subscribe(datos => {
      this.municipios = datos
    });

    this.distritoService.getDistrito().subscribe(value => {
      this.distritos = value
    });
  }

  updateCpopular(){

    if (this.form.valid) {
      this.cpopularService.updateCpopular(this.cpopular?.id, this.form.value).subscribe(data => {
      })

      this.cpopularService.getCpopular().subscribe(data => {
          this.cpopular = data
      });

      this.router.navigate(['nomencladores/divisiones/consejos-populares']);
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
