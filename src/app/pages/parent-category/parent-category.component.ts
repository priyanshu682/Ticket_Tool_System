import { Component, inject, OnInit } from '@angular/core';
import { ParentCategoryService } from '../../core/service/parent-category.service';
import { IParentCategory } from '../../core/model/interface/iparent-category';
import { ParentCategory } from '../../core/model/class/parent-category';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../core/service/department.service';
import { IDepartment } from '../../core/model/interface/idepartment';

@Component({
  selector: 'app-parent-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parent-category.component.html',
  styleUrl: './parent-category.component.css'
})
export class ParentCategoryComponent implements OnInit {
  parentCategorySrv = inject(ParentCategoryService)
  deptSrv = inject(DepartmentService)
  parentCategoryList: IParentCategory[] = []
  deptList: IDepartment[] = []
  parentCategoryObj: ParentCategory = new ParentCategory

  ngOnInit(): void {
    this.getParentCategoryList()
    this.getAllDepartments()
  }
  getAllDepartments() {
    this.deptSrv.getDepartments().subscribe((res: any) => {
      debugger
      this.deptList = res.data
      debugger
    })
  }
  getParentCategoryList() {
    this.parentCategorySrv.getParentCategory().subscribe((res: any) => {
      debugger
      this.parentCategoryList = res.data
      debugger
    })
  }

  saveParentCategory() {
    this.parentCategorySrv.createParentCategory(this.parentCategoryObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert("Parent Category Created Successfully")
        this.getParentCategoryList()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
  }

  onEdit(data: IParentCategory) {
    this.parentCategoryObj = data
    debugger
  }
  onReset() {
    this.parentCategoryObj = new ParentCategory
  }

  updateParentCategory() {
    this.parentCategorySrv.updateParentCategory(this.parentCategoryObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert("Parent Category Updated Successfully")
        this.getParentCategoryList()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
    this.onReset()
  }

  deleteParentCategory(id: number) {
    const isDelete = confirm("Are you sure you want to DELETE?")
    debugger
    if (isDelete) {
      this.parentCategorySrv.deleteParentCategoryById(id).subscribe((res: any) => {
        debugger
        if (res.result) {
          alert("Parent Category Deleted Successfully")
          this.getParentCategoryList()
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
  }
}
