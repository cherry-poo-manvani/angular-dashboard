import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auser } from '../models/auser.model';
import { AuserModule } from '../auser.module';
import { AuserServiceService } from '../Services/auser-service.service'

@Component({
  selector: 'app-auser-form',
  templateUrl: './auser-form.component.html',
  styleUrls: ['./auser-form.component.css']
})
export class AuserFormComponent implements
  OnInit {
  userForm = {} as FormGroup;
  submitted: boolean = false;
  userData: Auser[] = []

  id: number;
  isEdit: boolean = false;
  departments: any
  constructor(private formBuilder: FormBuilder,
    private AuserServiceService: AuserServiceService,
    private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  // <Initialization>
  ngOnInit(): void {
    this.buildform();
    this.getDepartment();

    if (this.id) {
      this.isEdit = true;
    }
    if (this.isEdit) {
      this.AuserServiceService.getByID(this.id).subscribe(data => {
        this.userForm.patchValue(data)
      })
    }
  }

  buildform() {
    this.userForm = this.formBuilder.group({
      "fullname": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.email),
      "mobile": new FormControl(""),
      "gender": new FormControl(""),
      "city": new FormControl(""),
      "date": new FormControl("", Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)),
      "department": new FormControl(""),
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }


  onSubmit() {
    if (this.isEdit) {
      this.Updatedata()
    }
    else {
      this.Savedata()
    }
  }


  Updatedata() {
    this.AuserServiceService.updateUser(this.id, this.userForm.value).subscribe(() => {
      alert("updated");
      this.router.navigateByUrl("/alist");
    })
  }

  Savedata() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.AuserServiceService.addUser(this.userForm.value).subscribe(() => {
      this.router.navigateByUrl("/alist");
    })
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

  getDepartment() {
    this.AuserServiceService.getDepratmnet().subscribe((res: any) => {
      this.departments = res;
    })
  }
}
