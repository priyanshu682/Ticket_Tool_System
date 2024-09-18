import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';
import { Constants } from '../constant/Constants';

@Injectable({
  providedIn: 'root'
})
export class ParentCategoryService {

  constructor(private masterSrv : MasterService) { }

  getParentCategory() {
    return this.masterSrv.get(`${Constants.API_URL}${Constants.PARENT_CATEGORY_METHODS.GET_PARENT_CATEGORY}`)
  }

  createParentCategory(body: any) {
    return this.masterSrv.post(`${Constants.API_URL}${Constants.PARENT_CATEGORY_METHODS.CREATE_PARENT_CATEGORY}`, body)
  }

  updateParentCategory(body: any) {
    return this.masterSrv.put(`${Constants.API_URL}${Constants.PARENT_CATEGORY_METHODS.UPDATE_PARENT_CATEGORY}`, body)
  }

  deleteParentCategoryById(id: number) {
    return this.masterSrv.delete(`${Constants.API_URL}${Constants.PARENT_CATEGORY_METHODS.DELETE_PARENT_CATEGORY_BY_ID}${id}`)
  }

}
