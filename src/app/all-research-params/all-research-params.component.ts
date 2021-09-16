import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {GameStyleService} from "../services/style.service";
import {BorrowingService} from "../services/borrowing.service";

@Component({
  selector: 'app-all-research-params',
  templateUrl: './all-research-params.component.html',
  styleUrls: ['./all-research-params.component.css']
})
export class AllResearchParamsComponent implements OnInit {
  researchForm!: FormGroup;
  styles!: any[];
  ages!: number[];
  minP!: number[];

  constructor(private router: Router,
              public gameService: GameService,
              public authService: AuthService,
              public userService: UserService,
              private styleService: GameStyleService,
              public borrowingService: BorrowingService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.styleService.getStyles().subscribe(res =>
      this.styles = res);
    this.gameService.getAllGamesByAge().subscribe(ages =>
      this.ages = ages);
    this.gameService.getAllGamesByMinPlayers().subscribe(minP =>
      this.minP = minP);
    this.researchForm = this.formBuilder.group({
      name: '',
      ageMin:'',
      style:''
    });
  }

  onSubmitForm(researchForm:FormGroup){
    // @ts-ignore
    var name=researchForm.name;
    console.log(researchForm);
    this.router.navigate(['nameResearch/'+ name]);
  }
}
