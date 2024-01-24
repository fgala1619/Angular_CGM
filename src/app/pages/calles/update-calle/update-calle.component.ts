import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';

@Component({
  selector: 'app-update-calle',
  templateUrl: './update-calle.component.html',
  styleUrls: ['./update-calle.component.css']
})
export class UpdateCalleComponent implements OnInit {

  calle: any
  form!: FormGroup
  mensaje: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private calleService: CallesService,
              private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id_calle:['', [Validators.required, Validators.maxLength(100)]],
    });
   }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.calleService.getCalleById(id).subscribe(datos => {
      this.calle = datos;
      this.form.patchValue(datos);
    })
  }

  updateCalle(){

    if (this.form.valid) {
      this.calleService.updateCalle(this.calle?.id, this.form.value).subscribe(data => {
      })

      this.calleService.getCalle().subscribe(data => {
        this.calle = data
      });

      this.router.navigate(['nomencladores/divisiones/calles']);
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
