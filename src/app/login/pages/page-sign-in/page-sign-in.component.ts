import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss'],
})
export class PageSignInComponent implements OnInit {
  public title = 'Sign In';
  constructor() {}

  ngOnInit(): void {}
  public changeTitle(): void {
    this.title = 'Connecte toi mon poto';
  }
}
