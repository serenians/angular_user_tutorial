import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private records: User[] =[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(items=> this.records = items);
  }

}
