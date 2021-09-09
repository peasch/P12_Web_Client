import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../models/role.model";
import {RoleService} from "../services/role.service";
import {User} from "../models/user.model";
import {BorrowingService} from "../services/borrowing.service";

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {
  userUpdateForm!: FormGroup;
  roles!: Role[];
  userId!: number;
  user!: User;
  borrowings!:any[];


  constructor(private formBuilder: FormBuilder,
              private roleService: RoleService,
              private route: ActivatedRoute,
              private userService: UserService,
              private borrowingService: BorrowingService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserDatasById(this.userId).subscribe(res => {
      this.user = res;
      this.borrowingService.getUnreturnedBorrowingsByUsername(this.user.username).subscribe(borrowings=>{
        this.borrowings=borrowings;
      })
    });
    this.userUpdateForm = this.formBuilder.group({
      id: '',
    });
    this.roleService.getRoles().subscribe(res => {
      this.roles = res;
    });
    console.log()

  }


  onSubmitForm(userUpdateForm: FormGroup) {
    this.userService.addRoleToUser(userUpdateForm, this.userId).subscribe(res => {
      this.ngOnInit();
    })
  }

  onRemoveRoleOfUser(id: number) {
    return this.userService.removeRoleToUser(id, this.user).subscribe(res => {
      this.ngOnInit();
    });
  }

  onNavigateToUsersManagement() {
    this.router.navigate(['userAdmin']);
  }

  onDeleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(res =>
      this.router.navigate(['userAdmin']));
  }
}
