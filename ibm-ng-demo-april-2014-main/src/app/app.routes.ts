import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { authGuard } from './guards/auth.guard';
import { EmployeeComponent } from './components/employee/employee.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent,canActivate:[loginGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent,canActivate:[authGuard] },
    { path: 'life', component: LifeCycleComponent,canActivate:[authGuard] },
    { path: '', component: HomeComponent,canActivate:[authGuard] },
    { path: 'logout', component: LogoutComponent,canActivate:[authGuard] },
    { path: 'emp', component: EmployeeComponent},

];

