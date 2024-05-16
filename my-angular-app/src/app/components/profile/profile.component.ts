import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EditProfile } from "../edit-profile/editProfile";
import { UserService } from "../../services/user.service";


@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [FormsModule,CommonModule,EditProfile],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
 
    firstName: string = "";
    lastName: string = "";
    phones: string = "";
    email: string = "";
    aadhaar: string = "";
    salary: string = "";
    aadhar: string = "";
    selectedFile: File | null = null; // Ensure it's initialized as null
    imageUrl: string = "";
   
    //understanding dependency injection

    // constructor(private userService:UserService){
    //     this.userService.getUserProfile()
    //     .subscribe({
    //         next:(response)=>{console.log(response);},
    //         error:(err)=>{console.log(err);}
    //     });
    // }

   

    showData() {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.phones);
        console.log(this.email);
        console.log(this.aadhaar);
        console.log(this.salary);
        alert('form submitted');
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0]; // Store the selected file
    }
    
    dataFromChild:Event|any="";

    receiveData=(data:Event)=>{
        console.log(data);
        this.dataFromChild=data;

    }
  

    
}
