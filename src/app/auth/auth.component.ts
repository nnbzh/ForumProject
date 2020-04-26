import { Component, OnInit, Input } from '@angular/core';
import { FormGroup , FormBuilder , FormControl  , Validators } from '@angular/forms';
import {User} from '../models/user';
import { Location} from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Input() user: User;

  public username = '';
  public password = '';
  public confirm = '';
  public email = '';
  constructor(private location: Location,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  clear() {
    this.email = '';
    this.username = '';
    this.password = '';
    this.confirm = '';
  }
  goBack(): void {
    this.location.back();
  }
  signup() {
    if (!this.username || !this.password || !this.confirm) {
      alert('Please, write your login and password!');
      this.clear();
    } else if (this.password !== this.confirm) {
      alert('Passwords do not match. Try again, please!');
      this.clear();
    } else {
      this.userService.signup(this.username, this.email, this.password).subscribe(res => {
        this.email = '';
        this.username = '';
        this.password = '';
        this.confirm = '';
        // alert('Signed up in successfully!');
        this.GoBackWithRefresh();
      });
    }
  }
  GoBackWithRefresh() {
    if ('referrer' in document) {
      location.replace(document.referrer);
    } else {
      window.history.back();
    }
  }
}
