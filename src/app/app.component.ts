import {Component} from '@angular/core';
import {UserService} from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaseStudy';

  constructor(private userService: UserService) {
  }

  logout() {
    this.userService.checkLogin = 'true';
    this.userService.CheckUsre(this.userService.userOnline.email).status = false;
  }
}
