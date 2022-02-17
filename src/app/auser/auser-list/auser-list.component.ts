import { Component, OnInit } from '@angular/core';
import { Auser } from '../models/auser.model';
import { AuserServiceService } from '../Services/auser-service.service';

@Component({
  selector: 'app-auser-list',
  templateUrl: './auser-list.component.html',
  styleUrls: ['./auser-list.component.css']
})
export class AuserListComponent implements OnInit {

  AusersListData: Auser[] = [];
  Searchname: string = '';
  departments: any;
  AuserserviceService: any;


  constructor(private auserServiceService: AuserServiceService) { }


  ngOnInit(): void {
    this.getUser();
    this.getDepartment();
  }


  // <methods>
  public getUser() {
    this.auserServiceService.getUser().subscribe((res: Auser[]) => {
      this.AusersListData = res;

    })
  }

  public deleteUser(id: number) {
    this.auserServiceService.deleteUser(id).subscribe(() => {
      this.getUser();
    })
  }
  public getDepartment() {
    this.auserServiceService.getDepratmnet().subscribe((res: any) => {
      this.departments = res;
    })
  }
  public details(index: number, getUser: Auser[]) {
    
  }

}