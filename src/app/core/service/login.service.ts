import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';
import { Login } from '../model/class/login';
import { Constants } from '../constant/Constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private masterSrv: MasterService) { }

  login(body: Login) {
    return this.masterSrv.post(`${Constants.API_URL}${Constants.LOGIN_METHOD}`, body)
  }
}
