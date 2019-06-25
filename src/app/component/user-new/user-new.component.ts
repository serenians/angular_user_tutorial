import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  private newUserForm : FormGroup
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router : Router) { }

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      name: [''],
      email:[''],
      imageUrl:[''],
    });
  }

  submitNewUser(){
    var newUserModel = new User();
    newUserModel.name=this.newUserForm.get("name").value;
    newUserModel.email = this.newUserForm.get("email").value;
    newUserModel.imageUrl = this.newUserForm.get("imageUrl").value;
    newUserModel.avatar = this.newUserForm.get("imageUrl").value;

    this.userService.addNewUser(newUserModel).subscribe(record=>{
      console.log(record);
      this.router.navigateByUrl("/user-list");
    });
  }

}
