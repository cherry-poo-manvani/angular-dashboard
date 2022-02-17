import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user.model';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersListData: User[] = [];
  Searchname: string = '';

  departments:any;
  constructor(private userServiceService: UserServiceService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDepartment();
  }

  getUser() {
    this.userServiceService.getUser().subscribe((res: User[]) => {
      this.usersListData = res;

    })
  }

  deleteUser(id: number) {
    this.userServiceService.deleteUser(id).subscribe(() => {
      this.getUser();
    })
  }
  getDepartment() {
    this.userServiceService.getDepratmnet().subscribe((res: any) => {
      this.departments = res;
    })
  }
 
}
