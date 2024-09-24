import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../core/service/department.service';
import { IDepartment } from '../../core/model/interface/idepartment';
import { ParentCategoryService } from '../../core/service/parent-category.service';
import { IParentCategory } from '../../core/model/interface/iparent-category';
import { ChildCategoryService } from '../../core/service/child-category.service';
import { IChildCategory } from '../../core/model/interface/ichild-category';
import { Ticket } from '../../core/model/class/ticket';
import { TicketService } from '../../core/service/ticket.service';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit {
  parentCategorySrv = inject(ParentCategoryService)
  deptSrv = inject(DepartmentService)
  childCategorySrv = inject(ChildCategoryService)
  newTicketObj :Ticket = new Ticket
  parentCategoryList: IParentCategory[] = []
  deptList: IDepartment[] = []
  childCategoryList: IChildCategory[] = []
  filterCategory: IChildCategory[] = []
  selectedParentCategory : string = ""
  ticketSrv = inject(TicketService)
  ngOnInit(): void {
    const loggedUserData = localStorage.getItem('ticketUser')
    if (loggedUserData != null) {
      const userData = JSON.parse(loggedUserData)
      this.newTicketObj.employeeId = userData.employeeId
    }
    this.getParentCategoryList()
    this.getAllDepartments()
    this.getChildCategoryList()
  }
  onCategoryChange(){
    this.filterCategory = this.childCategoryList.filter(x=>x.parentCategoryName == this.selectedParentCategory)
  }
  getParentCategoryList() {
    this.parentCategorySrv.getParentCategory().subscribe((res: any) => {
      debugger
      this.parentCategoryList = res.data
      debugger
    })
  }
  getChildCategoryList() {
    this.childCategorySrv.getChildCategory().subscribe((res: any) => {
      debugger
      this.childCategoryList = res.data
      debugger
    })
  }
  getAllDepartments() {
    this.deptSrv.getDepartments().subscribe((res: any) => {
      debugger
      this.deptList = res.data
      debugger
    })
  }
  onReset(){
    this.newTicketObj = new Ticket
  }

  createNewTicket() {
    debugger
    this.ticketSrv.createTicket(this.newTicketObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert("Ticket Created Successfully")
        this.onReset()
        debugger
      } else {
        debugger
        alert(res.message)
        debugger
      }
    })
  }
}
