export class ChildCategory {
  childCategoryId: number
  categoryName: string
  parentCategoryId: number

  constructor(){
    this.childCategoryId = 0
    this.categoryName = ""
    this.parentCategoryId = 0
  }
}