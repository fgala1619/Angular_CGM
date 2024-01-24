import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-update-provincia',
  templateUrl: './update-provincia.component.html',
  styleUrls: ['./update-provincia.component.css']
})
export class UpdateProvinciaComponent implements OnInit {

  prov: any
  form: FormGroup
  mensaje: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private provinciaService: ProvinciaService,
              private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        id_provincia:['', [Validators.required, Validators.minLength(2), Validators.maxLength(2),
          Validators.pattern('^[0-9]*$')]],
        nombre: ['', [Validators.required, Validators.maxLength(50)]],
      });
    }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.provinciaService.getProvinciaById(id).subscribe(provincia => {
      this.prov = provincia;
      this.form.patchValue(provincia);
    })
  }


  updateProvincia(){
    // this.data = this.form.value
    // this.prov.id_provincia = this.data.id_provincia
    // this.prov.nombre = this.data.nombre

    if (this.form.valid) {
      this.provinciaService.updateProvincia(this.prov?.id, this.form.value).subscribe(data => {
      })

      this.provinciaService.getProvincia().subscribe(data => {
        this.prov = data
      });

      this.router.navigate(['nomencladores/divisiones/provincia']);
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }


  }

}
