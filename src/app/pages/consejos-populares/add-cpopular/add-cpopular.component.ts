import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpopularService } from 'src/app/services/cpopular.service';
import { DistritosService } from 'src/app/services/distritos.service';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-add-cpopular',
  templateUrl: './add-cpopular.component.html',
  styleUrls: ['./add-cpopular.component.css']
})
export class AddCpopularComponent implements OnInit {

  data: any
  form: FormGroup;
  municipios: any
  distritos: any
  mensaje: string = '';

  constructor(private cpopularService: CpopularService,
              private router: Router,
              private municipService: MunicipioService,
              private distritoService: DistritosService,
              private fb: FormBuilder,
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
    this.municipService.getMunicipio().subscribe(datos => {
      this.municipios = datos
    });

    this.distritoService.getDistrito().subscribe(value => {
      this.distritos = value
    });
  }

  addCpopular(){
    this.data= this.form.value

    if (this.form.valid) {
      this.cpopularService.addCpopular(this.data).subscribe(data =>{
        this.router.navigate(['nomencladores/divisiones/consejos-populares']);
      })
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
