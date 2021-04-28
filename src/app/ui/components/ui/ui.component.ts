import { Component, OnInit } from '@angular/core';
/**
 * description pour la class
 */
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  /**
   * un commentaire pour cette propriété
   */
  public open = true;
  constructor() {}

  ngOnInit(): void {}
  /**
   * un commentaire pour la fn toggle
   */
  public toggle(): void {
    this.open = !this.open;
    console.log(this.open);
  }
}
