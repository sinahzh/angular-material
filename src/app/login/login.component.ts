import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';
import { Login } from 'src/app/interfaces/login';  
import { AuthService } from '../services/auth.service' 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  users: any;
  loginForm !: FormGroup;
  message!: string;  
  returnUrl!: string;  
  model: Login = { userid: "admin", password: "admin@123" }  
  // private authService : AuthService,
  constructor(private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthService   ) {
   
  }
  
  ngOnInit() {  
    this.loginForm = this.formBuilder.group({  
       userid: ['', Validators.required],  
       password: ['', Validators.required]  
    });  
  this.returnUrl = '/employee';  
  this.authService.logout();  
  }  
  // ngOnInit() {
    // this.authService.getJSON().subscribe(
    //   (res: any) => {
    //     this.users = res;
    //     localStorage.setItem('token', res.token);
    //   }
      
    //   );
  // }

  get f() { return this.loginForm.controls; }  

  login() {  
    console.log("Hi WORLD");
    if (this.loginForm.invalid) {  
      console.log("ERROR")
       return;  
    }  
    else {  
      
      this.authService.getJSON().subscribe( (res: any) => {
        this.users = res;   
        console.log("users", this.users);
        if ( res.find((r: { name: any, password:any })=> r.name == this.f.userid.value && r.password == this.f.password.value )) {  
          console.log("Login successful");  
          //this.authService.authLogin(this.model);  
          localStorage.setItem('isLoggedIn', "true");  
          localStorage.setItem('token', this.f.userid.value);  
          this.router.navigate([this.returnUrl]);  
       }  
       else {  
        this.message = "Please check your userid and password";  
        }
       }
      );

       
    }  
} 


loginUser () {
  console.log('email and password', this.email , this.password)
}
 


}
