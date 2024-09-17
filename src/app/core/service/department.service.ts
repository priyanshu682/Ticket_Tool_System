import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';
import { Constants } from '../constant/Constants';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private masterSrv: MasterService) { }

  getDepartments() {
    return this.masterSrv.get(`${Constants.API_URL}${Constants.DEPARTMENT_METHODS.GET_DEPARTMENTS}`)
  }

  createNewDepartment(body: any) {
    return this.masterSrv.post(`${Constants.API_URL}${Constants.DEPARTMENT_METHODS.CREATE_DEPARTMENT}`, body)
  }

  updateDepartment(body: any) {
    return this.masterSrv.put(`${Constants.API_URL}${Constants.DEPARTMENT_METHODS.UPDATE_DEPARTMENT}`, body)
  }

  deleteDepartmentById(id: number) {
    return this.masterSrv.delete(`${Constants.API_URL}${Constants.DEPARTMENT_METHODS.DELETE_DEPARTMENT_BY_ID}${id}`)
  }
}
