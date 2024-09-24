import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';
import { Constants } from '../constant/Constants';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private masterSrv:MasterService) { }

  createTicket(body:any){
    return this.masterSrv.post(`${Constants.API_URL}${Constants.TICKET_METHODS.CREATE_NEW_TICKET}`,body)
  }

  getTicketsCreatedByLoggedEmp(empId:number){
    return this.masterSrv.get(`${Constants.API_URL}${Constants.TICKET_METHODS.GET_TICKET_CREATED_BY_EMP_ID}${empId}`)
  }
  getAssignedTicketsByLoggedEmp(empId: number) {
    return this.masterSrv.get(`${Constants.API_URL}${Constants.TICKET_METHODS.GET_ASSIGNED_TICKET_BY_EMP_ID}${empId}`)
  }

  startTicket(id:number){
    return this.masterSrv.post(`${Constants.API_URL}${Constants.TICKET_METHODS.START_TICKET}${id}`,{})
  }

  closeTicket(id:number){
    return this.masterSrv.post(`${Constants.API_URL}${Constants.TICKET_METHODS.CLOSE_TICKET}${id}`,{})
  }
}
