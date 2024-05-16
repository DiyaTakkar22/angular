import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class EmployeeComponent {
  allEmployees: any[] = [];
  employeeById: any; // Initialized as undefined

  constructor(private employeeService: EmployeeService) { }

  getAllEmps() {
    console.log('getAllEmps called');
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (response) => {
          console.log('Response:', response);
          this.allEmployees = response;
        },
        error: (error) => { 
          console.error('Error:', error); 
        }
      });
  }
  

  getEmpById(id: string) {
    console.log(id);
    this.employeeService.getEmployeeById(id)
      .subscribe({
        next: (response) => {
          this.employeeById = response;
          console.log(response);
          // code 
        },
        error: (error) => { console.error(error); }
      });
  }
}
