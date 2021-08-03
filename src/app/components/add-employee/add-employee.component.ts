import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  formEmployee: FormGroup;


  constructor(
    public formulario: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {
    this.formEmployee = this.formulario.group({
      nombre: [''],
      correo: ['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    this.crudService.agregarEmpleado(this.formEmployee.value).subscribe(respuesta => {
      this.router.navigateByUrl('/list-employee')
    });

  }

}
