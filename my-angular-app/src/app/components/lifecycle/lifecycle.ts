import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-lifecycle',
    templateUrl:'./lifecycle.html',
    standalone:true
})
export class LifeCycleComponent implements OnInit{
   constructor(){
     console.log("constructor");
   }
   ngOnInit(): void {
       console.log("ngOnInit");
   }
}