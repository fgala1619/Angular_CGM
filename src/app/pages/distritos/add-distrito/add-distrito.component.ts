import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DistritosService } from 'src/app/services/distritos.service';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-add-distrito',
  templateUrl: './add-distrito.component.html',
  styleUrls: ['./add-distrito.component.css']
})
export class AddDistritoComponent implements OnInit {

  data: any
  form: FormGroup;
  municipios: any
  mensaje: string = '';

  constructor(private router: Router,
              private distritoService: DistritosService,
              private fb: FormBuilder,
              private municipService: MunicipioService
  ) {
    this.form = this.fb.group({
      id_distrito:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      municipio_id: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.municipService.getMunicipio().subscribe(datos => {
      this.municipios = datos
    });
  }


  addDistrito(){
    this.data= this.form.value

    if (this.form.valid) {
      this.distritoService.addDistrito(this.data).subscribe(data =>{
        this.router.navigate(['nomencladores/divisiones/distritos']);
      })
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
