import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MenubarComponent } from './components/menubar/menubar';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChildComponent } from './components/child/child.component';
import { LifeCycleComponent } from './components/lifecycle/lifecycle';
import { RouterOutlet } from '@angular/router';


// app-root is the selector / name of the component and it is specified using selector meta 
//data of the component’s decorator. app-root can be used by application root document, src/index.html


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HomeComponent, MenubarComponent,LoginComponent,ProfileComponent,ChildComponent,LifeCycleComponent,RouterOutlet],
  styleUrls: ['./app.component.css'],
  standalone: true // Add standalone flag here
})
export class AppComponent {
  title: string = 'my-angular-app';
  employee = {
    firstName: "sonu",
    salary: 10.5,
    isIndian: false
  }
}

