import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  logout() {
    localStorage.clear();
    this.logged = false;
    // alert('Logged out successfully!');
    location.reload();
  }

}
