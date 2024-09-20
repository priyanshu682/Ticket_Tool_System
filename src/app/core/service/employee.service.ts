import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';
import { Constants } from '../constant/Constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private masterSrv:MasterService) { }

  getEmployees(){
    return this.masterSrv.get(`${Constants.API_URL}${Constants.EMPLOYEE_METHODS.GET_EMPLOYEES}`)
  }

  getEmployeeById(id:number){
    return this.masterSrv.get(`${Constants.API_URL}${Constants.EMPLOYEE_METHODS.GET_EMPLOYEE_BY_ID}?id=${id}`)
  }

  getEmployeesByDeptId(id:number){
    return this.masterSrv.get(`${Constants.API_URL}${Constants.EMPLOYEE_METHODS.GET_EMPLOYEE_BY_DEPT_ID}?id=${id}`)
  }

  createEmployee(body:any){
    return this.masterSrv.post(`${Constants.API_URL}${Constants.EMPLOYEE_METHODS.CREATE_EMPLOYEE}`,body)
  }

  updateEmployee(body:any){
    return this.masterSrv.put(`${Constants.API_URL}${Constants.EMPLOYEE_METHODS.UPDATE_EMPLOYEE}`,body)
  }

  deleteEmployeeById(id:number){
    return this.masterSrv.delete(`${Constants.API_URL}${Constants.EMPLOYEE_METHODS.DELETE_EMPLOYEE_BY_ID}?id=${id}`)
  }
}
