import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  EmployeeForm : FormGroup;
  title = 'Crear Empleados'
  id: string | null;

  constructor(private fb: FormBuilder,
              private _employeeService: EmployeeService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.EmployeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      sex: ['', Validators.required],
      area: ['', Validators.required],
      description: ['', Validators.required],
      boletin: [''],
      rols: ['', Validators.required],
    })
    this.id= this.aRoute.snapshot.paramMap.get('id')
              }

  ngOnInit(): void {
    this.isEdit()
  }

  addEmployee(){
    console.log(this.EmployeeForm);

    if(this.EmployeeForm.invalid){

      return Object.values(this.EmployeeForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }

    const EMPLOYEE : Employee ={
      name: this.EmployeeForm.get('name')?.value,
      email: this.EmployeeForm.get('email')?.value,
      sex: this.EmployeeForm.get('sex')?.value,
      area: this.EmployeeForm.get('area')?.value,
      description: this.EmployeeForm.get('description')?.value,
      boletin: this.EmployeeForm.get('boletin')?.value,
      rols: this.EmployeeForm.get('rols')?.value,
    }

    if(this.id !== null)
    {
      //edit employee
      this._employeeService.updateEmployee(this.id,EMPLOYEE).subscribe(data =>{
        console.log("Actualizado");
        this.router.navigate(['/list-employee'])
      })
    }else{
      //create employee
      console.log(EMPLOYEE);
      this._employeeService.saveEmployee(EMPLOYEE).subscribe(data =>{
        console.log("Guardado");
        this.router.navigate(['list-employee'])
      },error=>{
        console.log(error);
        this.EmployeeForm.reset();
      })
    }
  }

  isEdit(){
    if(this.id !== null){
      this.title = "Editar Empleado"
      this._employeeService.getEmployee(this.id).subscribe(data=>{
        this.EmployeeForm.setValue({
          name: data.name,
          email: data.email,
          sex: data.sex,
          area: data.area,
          description: data.description,
          boletin: data.boletin,
          rols: data.rols
        })
      })
    }
  }

  //Validations

  get nameNValid(){
    return this.EmployeeForm.get('name')?.invalid && this.EmployeeForm.get('name')?.touched
  }
  get emailNValid(){
    return this.EmployeeForm.get('email')?.invalid && this.EmployeeForm.get('email')?.touched
  }
  get sexNValid(){
    return this.EmployeeForm.get('sex')?.invalid && this.EmployeeForm.get('sex')?.touched
  }
  get areaNValid(){
    return this.EmployeeForm.get('area')?.invalid && this.EmployeeForm.get('area')?.touched
  }
  get descNValid(){
    return this.EmployeeForm.get('description')?.invalid && this.EmployeeForm.get('description')?.touched
  }
  get rolsNValid(){
    return this.EmployeeForm.get('rols')?.invalid && this.EmployeeForm.get('rols')?.touched
  }
}
