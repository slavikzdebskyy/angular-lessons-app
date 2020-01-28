import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-exaple',
  templateUrl: './template-exaple.component.html',
  styleUrls: ['./template-exaple.component.scss']
})
export class TemplateExapleComponent implements OnInit {
  isTemplate1: boolean;
  constructor() {
    this.isTemplate1 = true;
  }

  ngOnInit() {
  }

  public toggleTrue(): void {
    this.isTemplate1 = true;
  }
  public toggleFalse(): void {
    this.isTemplate1 = false;
  }

}
