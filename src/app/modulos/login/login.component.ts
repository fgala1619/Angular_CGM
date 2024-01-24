import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { properties } from 'src/assets/properties/properties';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ConstantUri } from 'src/app/utils/contantUri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo = properties.logo;
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private readonly apiService: ApiService<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
    });
  }

  login(){

    if (this.formLogin.invalid) {
      for(const key in this.formLogin.controls){
        this.formLogin.controls[key].markAsDirty();
      }
      return ;
    }

    const {username, password} = this.formLogin.value;

      const body = {
        username,
        password,
      }

      const configPost = {url: ConstantUri.login, body}
      this.apiService.postService(configPost);
        this.router.navigate(['dashboard'])

        //this.apiService.postService(configPost).subscribe(val => {
        //this.router.navigate(['principal'])
        //console.log(val);
      //});

     //console.log(this.formLogin.value);

  }
}

