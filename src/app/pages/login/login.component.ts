import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../core/model/class/login';
import { LoginService } from '../../core/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login = new Login()
  loginSrv = inject(LoginService)
  router = inject(Router)
  onLogin() {
    debugger
    this.loginSrv.login(this.loginObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        localStorage.setItem('ticketUser', JSON.stringify(res.data))
        this.router.navigateByUrl('dashboard')
        debugger
      }else{
        debugger
        alert(res.message)
      }
    })
  }
}
