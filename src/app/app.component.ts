import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forum-project';

  logged = false;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
}
