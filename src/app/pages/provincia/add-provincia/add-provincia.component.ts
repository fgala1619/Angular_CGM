import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrls: ['./add-provincia.component.css']
})
export class AddProvinciaComponent implements OnInit {

  data: any
  form: FormGroup;
  mensaje: string = '';

  constructor(private router: Router,
              private provinciaService: ProvinciaService,
              private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id_provincia:['', [Validators.required, Validators.minLength(2), Validators.maxLength(2),
        Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  // form = new FormGroup({
  //   id_provincia: new FormControl('', Validators.required),
  //   nombre: new FormControl('', Validators.required),
  // });

  ngOnInit(): void {
  }


  addProvincia(){
    this.data= this.form.value
    if (this.form.valid) {
      this.provinciaService.addProvincia(this.data).subscribe(data =>{
        this.router.navigate(['nomencladores/divisiones/provincia']);
      })
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }

}

}
