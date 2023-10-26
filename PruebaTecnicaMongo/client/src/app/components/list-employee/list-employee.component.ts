import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  listEmployee: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(){
    this._employeeService.getEmployees().subscribe(data=>{
      console.log(data);
      this.listEmployee = data;
    }, error=>{
      console.log(error);
    })
  }

  deleteEmployee(id:any){
    this._employeeService.deleteEmployee(id).subscribe(data=>{
      console.log("Eliminado");
      this.getEmployees()
    },error=>{
      console.log(error);
    })
  }

}
