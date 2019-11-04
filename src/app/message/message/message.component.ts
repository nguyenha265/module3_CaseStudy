import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message = '';
  error = false;

  inbox() {
    // @ts-ignore
    if (this.userService.userOnline !== undefined) {
      const mailbox = [];
      mailbox.push(this.message);
      this.messageService.message.push({
        user: this.userService.userOnline,
        date: new Date(),
        message: mailbox
    });
      this.error = false;
    } else {
      this.error = true;
    }
  }

  constructor(private userService: UserService, private messageService: MessageService) {
  }

  ngOnInit() {
  }

}
