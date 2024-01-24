import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-add-municipio',
  templateUrl: './add-municipio.component.html',
  styleUrls: ['./add-municipio.component.css']
})
export class AddMunicipioComponent implements OnInit {

  form: FormGroup;
  provincias:any
  data: any
  mensaje: string = '';

  constructor(private municipService: MunicipioService,
              private router: Router,
              private provService: ProvinciaService,
              private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id_municipio:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      provincia_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.provService.getProvincia().subscribe(datos => {
      this.provincias = datos
    });
  }


  addMunicipio(){
    this.data= this.form.value
    if (this.form.valid) {
      this.municipService.addMunicipio(this.data).subscribe(data =>{
        this.router.navigate(['nomencladores/divisiones/municipio']);
      })
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
