import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DecretoLeyService } from 'src/app/services/decreto-ley.service';
import { OrganismoService } from 'src/app/services/organismo.service';
import { TipoMultaService } from 'src/app/services/tipo-multa.service';

@Component({
  selector: 'app-add-organismo',
  templateUrl: './add-organismo.component.html',
  styleUrls: ['./add-organismo.component.css']
})
export class AddOrganismoComponent implements OnInit {

  data: any
  form!: FormGroup;
  tipoMultas: any
  asociados: any
  decretoLey: any
  mensaje: string = '';

  constructor(private router: Router,
              private organismoService: OrganismoService,
              private fb: FormBuilder,
              private tipoMultaService: TipoMultaService,
              private decretoLeyService: DecretoLeyService,
  ) {
    this.form = this.fb.group({
      id_organismo:['', [Validators.required, Validators.minLength(3), Validators.maxLength(5),
        Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      tipo_multa_id: [''],
      asociado_id: [''],
      asociado: [''],
      decreto_ley_id: [''],
    });
  }

  ngOnInit(): void {
    this.tipoMultaService.getTipoMulta().subscribe(valor => {
      this.tipoMultas = valor
    });

    this.decretoLeyService.getDecretoLey().subscribe(value => {
      this.decretoLey = value
    });
  }

  addOrganismo(){
    this.data= this.form.value

    if (this.form.valid) {
      this.organismoService.addOrganismo(this.data).subscribe(data =>{
        this.router.navigate(['nomencladores/divisiones/organismos']);
      })
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
