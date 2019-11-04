import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../../interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = this.userService.user;
  name = '';
  resultSearch: User[] = [];

  search() {
    this.resultSearch = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].name === this.name) {
        this.resultSearch.push(this.user[i]);
      }
    }
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
