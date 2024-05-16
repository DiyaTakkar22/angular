import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LifeCycleComponent } from './components/lifecycle/lifecycle';
import { EditProfile } from './components/edit-profile/editProfile';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},
    {path:'edit-profile',component:EditProfile},
    {path:'home',component:HomeComponent},
    {path:'life',component:LifeCycleComponent}
];
