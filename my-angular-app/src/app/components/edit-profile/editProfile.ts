import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector:'edit-profile',
    standalone:true,
    templateUrl:'./editProfile.html'

})
export class EditProfile{

    firstName="Diya";
    @Output()
    sendToProfile=new EventEmitter<any>();

    sendDataToProfile=()=>{
        console.log(this.firstName);
        this.sendToProfile.emit(this.firstName)
    }
}