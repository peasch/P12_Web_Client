import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.css']
})
export class FourOhFourComponent implements OnInit {
  cheminImage: any = "../assets/deadLink.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
