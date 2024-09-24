export interface IMyTicket{
  ticketId: number
  createdDate: Date
  expectedEndDate: Date
  state: string
  severity: string
  contactNo: string
  ticketNo: string
  deptName: string
  createdByEmployee: string
  assignedToEmployee: string
  childCategory: string
  parentCategory: string
}

export interface IAssignedTicket{
childCategory: any
  completedDate: Date
  createdDate: Date
  employeeId: number
  employeeName: string
  expectedEndDate: Date
  state: string
  ticketId: number
  ticketNo: string
  severity: string
  childCategroyName: string
  parentCategoryName: string
  requestDetails: string
}