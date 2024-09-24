export class Ticket{
  employeeId:number
  severity:string
  childCategoryId:number
  deptId:number
  requestDetails:string

  constructor(){
    this.employeeId = 0
    this.severity = ""
    this.childCategoryId = 0
    this.deptId = 0
    this.requestDetails = ""
  }
}