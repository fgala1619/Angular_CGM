import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoOficinaService } from 'src/app/services/tipo-oficina.service';

@Component({
  selector: 'app-add-tipo-oficina',
  templateUrl: './add-tipo-oficina.component.html',
  styleUrls: ['./add-tipo-oficina.component.css']
})
export class AddTipoOficinaComponent implements OnInit {

  data: any
  form: FormGroup;
  mensaje: string = '';

  constructor(private router: Router,
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
  }

  addTipoOficina(){
    this.data= this.form.value

    if (this.form.valid) {
      this.tipoOficinaService.addTipoOficina(this.data).subscribe(data =>{
        this.router.navigate(['nomencladores/divisiones/tipos-oficinas']);
      })
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
