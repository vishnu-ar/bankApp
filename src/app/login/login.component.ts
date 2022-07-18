import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //database

  database={
    1000:{acno:1000,password:1000,uname:"Vishnu",},
    1001:{acno:1001,password:1001,uname:"aby",},
    1002:{acno:1002,password:1002,uname:"amy",},

  }
  aim=".....this is future....."
ps="account number please...!"
acno=""
pswd=""
  constructor() { }

  ngOnInit(): void {
  }
  acnoCheck(event:any){
    // console.log(event.target.value);
    this.acno=event.target.value
   

  }
  pswdChange(event:any){
    // console.log(event.target.value);
    this.pswd=event.target.value
    

  }

  login(){
    alert("button clicked")
    
  }
  

}
