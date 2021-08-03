import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost/empleados/';
  constructor(private http: HttpClient) { }

  agregarEmpleado(datasEmployee: Employee): Observable<any> {
    return this.http.post(this.API + "?insertar=1", datasEmployee)
  }


  obtenerEmpleados() {
    return this.http.get(this.API)
  }

  borrarEmpleado(id: any): Observable<any> {
    return this.http.get(this.API + "?borrar=" + id)
  }

  obtenerEmpleado(id: any): Observable<any> {
    return this.http.get(this.API + "?consultar=" + id)
  }

  editarEmpleado(id: any, datasEmployee: Employee): Observable<any> {
    return this.http.put(this.API + "?actualizar=" + id, datasEmployee)
  }


}
