import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {Message} from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: Message[] = [];

  constructor(private userService: UserService) {
  }
}
