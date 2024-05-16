import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
     selector:'app-login',
     imports:[FormsModule,CommonModule],
     standalone:true,
     templateUrl:'./login.component.html'
})
export class LoginComponent{
   username:string="";
   password:string="";
   firstName:string="";
   lastName:string="";
   email:string="";
   phone:string="";
   message:string="";
   showMessage: boolean = false; // Flag to control message display
   submit(){
      console.log("submit form");
      console.log(this.username);
      console.log(this.password);
      console.log(this.message);
      this.message = `logged in:`;
      this.showMessage = true; // Set flag to true to display the message
    //   this.userService.loginUser()
    //   .subscribe({
    //       next:(response)=>{console.log(response);},
    //       error:(err)=>{console.log(err);}
    //   })
    //  }
    //  constructor(private userService:UserService){
    //       this.userService.loginUser()
    //       .subscribe({
    //           next:(response)=>{console.log(response);},
    //           error:(err)=>{console.log(err);}
    //       })
      }
   

}