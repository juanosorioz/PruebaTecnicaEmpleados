import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:4000/api/employees/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get(this.url)
  }

  getEmployee(id: string): Observable<any>{
    return this.http.get(this.url + id)
  }

  saveEmployee(employee: Employee): Observable<any>{
    return this.http.post(this.url, employee)
  }

  updateEmployee(id: string, employee: Employee): Observable<any>{
    return this.http.put(this.url + id, employee)
  }

  deleteEmployee(id: string): Observable<any>{
    return this.http.delete(this.url + id)
  }
}
