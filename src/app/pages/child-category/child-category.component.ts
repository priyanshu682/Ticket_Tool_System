import { Component, inject, OnInit } from '@angular/core';
import { ChildCategoryService } from '../../core/service/child-category.service';
import { ParentCategoryService } from '../../core/service/parent-category.service';
import { IChildCategory } from '../../core/model/interface/ichild-category';
import { IParentCategory } from '../../core/model/interface/iparent-category';
import { ChildCategory } from '../../core/model/class/child-category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-category.component.html',
  styleUrl: './child-category.component.css'
})
export class ChildCategoryComponent implements OnInit {
  childCategorySrv = inject(ChildCategoryService)
  parentCategorySrv = inject(ParentCategoryService)
  childCategoryList: IChildCategory[] = []
  parentCategoryList: IParentCategory[] = []
  childCategoryObj: ChildCategory = new ChildCategory

  ngOnInit(): void {
    this.getChildCategoryList()
    this.getParentCategoryList()
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

  saveChildCategory() {
    this.childCategorySrv.createChildCategory(this.childCategoryObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert("Child Category Created Successfully")
        this.getChildCategoryList()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
  }

  onEdit(data: IChildCategory) {
    this.childCategoryObj = data
    debugger
  }
  onReset() {
    this.childCategoryObj = new ChildCategory
  }

  updateChildCategory() {
    this.childCategorySrv.updateChildCategory(this.childCategoryObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert("Child Category Updated Successfully")
        this.getChildCategoryList()
        debugger
      } else {
        alert(res.message)
        debugger
      }
    })
    this.onReset()
  }

  deleteChildCategory(id: number) {
    const isDelete = confirm("Are you sure you want to DELETE?")
    debugger
    if (isDelete) {
      this.childCategorySrv.deleteChildCategoryById(id).subscribe((res: any) => {
        debugger
        if (res.result) {
          alert("Child Category Deleted Successfully")
          this.getChildCategoryList()
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

