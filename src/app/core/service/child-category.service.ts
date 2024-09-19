import { Injectable } from '@angular/core';
import { Constants } from '../constant/Constants';
import { MasterService } from './master/master.service';

@Injectable({
  providedIn: 'root'
})
export class ChildCategoryService {

  constructor(private masterSrv: MasterService) { }

  getChildCategory() {
    return this.masterSrv.get(`${Constants.API_URL}${Constants.CHILD_CATEGORY_METHODS.GET_CHILD_CATEGORY}`)
  }

  getChildCategoryByParentId(id: number) {
    return this.masterSrv.get(`${Constants.API_URL}${Constants.CHILD_CATEGORY_METHODS.GET_CHILD_CATEGORY_BY_PARENT_ID}${id}`)
  }

  createChildCategory(body: any) {
    return this.masterSrv.post(`${Constants.API_URL}${Constants.CHILD_CATEGORY_METHODS.CREATE_CHILD_CATEGORY}`, body)
  }

  updateChildCategory(body: any) {
    return this.masterSrv.put(`${Constants.API_URL}${Constants.CHILD_CATEGORY_METHODS.UPDATE_CHILD_CATEGORY}`, body)
  }

  deleteChildCategoryById(id: number) {
    return this.masterSrv.delete(`${Constants.API_URL}${Constants.CHILD_CATEGORY_METHODS.DELETE_CHILD_CATEGORY_BY_ID}${id}`)
  }

}
