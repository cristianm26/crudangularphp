import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Employee } from './../../services/Employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  Employees: any;
  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerEmpleados().subscribe(resp => {
      this.Employees = resp;
    });
  }

  borrarRegistro(id: any, i: any) {
    if (window.confirm("¿Desea Borrar el registro?")) {
      this.crudService.borrarEmpleado(id).subscribe(
        (respuesta) => {
          this.Employees.splice(i, 1)
        }
      )
    }

  }

}
