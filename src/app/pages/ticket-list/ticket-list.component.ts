import { Component, inject, OnInit } from '@angular/core';
import { TicketService } from '../../core/service/ticket.service';
import { IAssignedTicket, IMyTicket } from '../../core/model/interface/iticket';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
  mode: string = "My Tickets"
  loggedUserEmpId: number = 0
  ticketSrv = inject(TicketService)
  myTicketList: IMyTicket[] = []
  assignedTicketList:IAssignedTicket[]=[]
  ngOnInit(): void {
    const loggedUserData = localStorage.getItem('ticketUser')
    if (loggedUserData != null) {
      const userData = JSON.parse(loggedUserData)
      this.loggedUserEmpId = userData.employeeId
    }
    this.changeMode(this.mode)
  }

  changeMode(mode: string) {
    this.mode = mode
    if (mode == "My Tickets") {
      this.ticketSrv.getTicketsCreatedByLoggedEmp(this.loggedUserEmpId).subscribe((res: any) => {
        this.myTicketList = res.data
      })
    } else {
      this.ticketSrv.getAssignedTicketsByLoggedEmp(this.loggedUserEmpId).subscribe((res: any) => {
        this.assignedTicketList = res.data
      })
    }
  }
  onStart(ticketId:number){
    debugger
    this.ticketSrv.startTicket(ticketId).subscribe((res: any) => {
      if(res.result){
        debugger
        alert("Ticket Started Successfully")
        this.changeMode(this.mode)
      }else{
        alert(res.message)
        debugger
      }

    })
  }

  onClose(ticketId:number){
    debugger
    this.ticketSrv.closeTicket(ticketId).subscribe((res: any) => {
      if(res.result){
        debugger
        alert("Ticket Closed Successfully")
        this.changeMode(this.mode)
      }else{
        alert(res.message)
        debugger
      }

    })
  }
}
