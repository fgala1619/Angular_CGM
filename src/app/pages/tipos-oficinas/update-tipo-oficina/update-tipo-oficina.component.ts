import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoOficinaService } from 'src/app/services/tipo-oficina.service';

@Component({
  selector: 'app-update-tipo-oficina',
  templateUrl: './update-tipo-oficina.component.html',
  styleUrls: ['./update-tipo-oficina.component.css']
})
export class UpdateTipoOficinaComponent implements OnInit {

  tipoOficina: any
  form: FormGroup
  mensaje: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tipoOficinaService: TipoOficinaService,
              private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      identificador:['', [Validators.required, Validators.minLength(1), Validators.maxLength(2),
        Validators.pattern('^[0-9]*$')]],
        descripcion: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.tipoOficinaService.getTipoOficinaById(id).subscribe(ofic => {
      this.tipoOficina = ofic;
      this.form.patchValue(ofic);
    })
  }

  updateTipoOficina(){

    if (this.form.valid) {
      this.tipoOficinaService.updateTipoOficina(this.tipoOficina?.id, this.form.value).subscribe(data => {
      })

      this.tipoOficinaService.getTipoOficina().subscribe(data => {
        this.tipoOficina = data
      });

      this.router.navigate(['nomencladores/divisiones/tipos-oficinas']);
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
