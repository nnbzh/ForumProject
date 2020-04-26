import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { UserService } from '../user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor(private location: Location,
              private userService: UserService) { }

  ngOnInit(): void {

  }
  clear() {
    this.username = '';
    this.password = '';
  }
  goBack(): void {
    this.location.back();
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('token', res.token);
      if (this.username == 'admin') {
        localStorage.setItem('isAdmin', this.username);
      } else if (this.username != '') {
        localStorage.setItem('username', this.username);
      }
      this.username = '';
      this.password = '';
      // alert('Logged in successfully!');
      this.GoBackWithRefresh();
    });
  }
  GoBackWithRefresh() {
    if ('referrer' in document) {
      location.replace(document.referrer);
    } else {
      window.history.back();
    }
  }
}
