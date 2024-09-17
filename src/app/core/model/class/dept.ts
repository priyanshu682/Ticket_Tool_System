export class Department{
  deptId : number
  deptName : string
  createdDate : Date

  constructor(){
    this.deptId = 0
    this.deptName = ""
    this.createdDate = new Date
  }
}