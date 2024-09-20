import { Component, inject, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/service/department.service';
import { IDepartment } from '../../core/model/interface/idepartment';
import { LoginService } from '../../core/service/login.service';
import { EmployeeService } from '../../core/service/employee.service';
import { IEmployee } from '../../core/model/interface/iemployee';
import { Employee } from '../../core/model/class/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  empSrv = inject(EmployeeService)
  roleSrv = inject(LoginService)
  deptSrv = inject(DepartmentService)
  deptList: IDepartment[] = []
  rolesList: any[] = []
  empList: IEmployee[] = []
  empObj: Employee = new Employee
  isViewChange: boolean = false

  ngOnInit(): void {
    this.getAllDepartments()
    this.getRolesList()
    this.getEmployeesList()
  }

  changeView() {
    this.isViewChange = !this.isViewChange
  }
  getAllDepartments() {
    this.deptSrv.getDepartments().subscribe((res: any) => {
      debugger
      this.deptList = res.data
      debugger
    })
  }
  getRolesList() {
    this.roleSrv.getAllRoles().subscribe((res: any) => {
      debugger
      this.rolesList = res.data
      debugger
    })
  }
  getEmployeesList() {
    this.empSrv.getEmployees().subscribe((res: any) => {
      debugger
      this.empList = res.data
      debugger
    })
  }

  saveEmployee() {
    this.empSrv.createEmployee(this.empObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert("Employee Created Successfully")
        this.getEmployeesList()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
  }

  onEdit(data: any) {
    this.empObj = data
    this.isViewChange = false
    debugger
  }
  onReset() {
    this.empObj = new Employee
  }

  updateEmployee() {
    this.empSrv.updateEmployee(this.empObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert("Employee Updated Successfully")
        this.getEmployeesList()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
    this.onReset()
    this.isViewChange = true
  }

  deleteEmployee(id: number) {
    const isDelete = confirm("Are you sure you want to DELETE?")
    debugger
    if (isDelete) {
      this.empSrv.deleteEmployeeById(id).subscribe((res: any) => {
        debugger
        if (res.result) {
          alert("Employee Deleted Successfully")
          this.getEmployeesList()
          debugger
        } else {
          alert(res.message)
          debugger
        }
      })
    } else {
      alert("DELETE operation cancelled")
      debugger
    }
    this.isViewChange = true
  }
}


