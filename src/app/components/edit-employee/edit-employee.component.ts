import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  elId: any;
  formEmployee: FormGroup;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    public formulario: FormBuilder,
    private crudService: CrudService
  ) {
    this.elId = this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.obtenerEmpleado(this.elId).subscribe(
      (respuesta) => {
        this.formEmployee.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo']
        })
      })
    this.formEmployee = this.formulario.group(
      {
        nombre: [''],
        correo: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    //console.log(this.formEmployee.value)
    this.crudService.editarEmpleado(this.elId, this.formEmployee.value).subscribe(
      () => {
        this.router.navigateByUrl('/list-employee')
      }
    )
  }
}
