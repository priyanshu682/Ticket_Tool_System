import { Component, inject, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/service/department.service';
import { IDepartment } from '../../core/model/interface/department';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Department } from '../../core/model/class/dept';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {
  deptSrv = inject(DepartmentService)
  deptList: IDepartment[] = []
  deptObj: Department = new Department

  ngOnInit(): void {
    debugger
    this.getAllDepartments()
  }
  getAllDepartments() {
    this.deptSrv.getDepartments().subscribe((res: any) => {
      debugger
      this.deptList = res.data
      debugger
    })
  }

  saveDept() {
    debugger
    this.deptSrv.createNewDepartment(this.deptObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert("Department Created Successfully")
        this.getAllDepartments()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
  }
  onEdit(data: IDepartment) {
    this.deptObj = data
  }
  onReset() {
    this.deptObj = new Department
  }
  updateDept() {
    debugger
    this.deptSrv.updateDepartment(this.deptObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert("Department Updated Successfully")
        this.getAllDepartments()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
    this.onReset()
  }
  deleteDept(id: number) {
    const isDelete = confirm("Are you sure you want to DELETE?")
    if (isDelete) {
      this.deptSrv.deleteDepartmentById(id).subscribe((res: any) => {
        debugger
        if (res.result) {
          alert("Department Deleted Successfully")
          this.getAllDepartments()
          debugger
        } else {
          alert(res.message)
          debugger
        }
      })
    }else{
      alert("DELETE operation cancelled")
    }

  }
}
