import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CallesService } from 'src/app/services/calles.service';

@Component({
  selector: 'app-add-calle',
  templateUrl: './add-calle.component.html',
  styleUrls: ['./add-calle.component.css']
})
export class AddCalleComponent implements OnInit {

  data: any
  form: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private calleService: CallesService,
  ) {
    this.form = this.fb.group({
      id_calle:['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
  }

  addCalle(){
    this.data= this.form.value

    if (this.form.valid) {
      this.calleService.addCalle(this.data).subscribe(data =>{
        this.router.navigate(['nomencladores/divisiones/calles']);
      })
    }
    else{
      this.mensaje = 'Por favor, completa todos los campos correctamente';
    }
  }

}
