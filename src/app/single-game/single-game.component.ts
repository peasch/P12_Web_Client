import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {SafeResourceUrl} from '@angular/platform-browser';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CopyService} from "../services/copy.service";

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {
  copyForm!: FormGroup;

  game!: any;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameService: GameService,
              private copyService:CopyService,
              private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.initForm();
    const id = this.route.snapshot.params['id'];
    this.gameService.getGameById(+id).subscribe(game =>
      this.game = game);

  }

  initForm() {
    this.copyForm = this.formBuilder.group({code: ''});
  }

  onSubmitForm(copyForm: FormGroup) {
    this.copyService.addCopy(copyForm,this.game.id).subscribe(res =>{
    this.router.navigate(['games'])},
      (error) =>{
      console.log(error);
      alert('code existant');
      });

  }
  navigateToGames() {
    this.router.navigate(['games']);
  }


}
