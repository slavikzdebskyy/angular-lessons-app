import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public className: string;
  public isVisible: boolean;
  public style: any;

  constructor() {
    this.className = '';
    this.isVisible = false;
    this.style = {'border-radius': '10px'};
  }

  public ngOnInit() {
  }

  public toglleClassName(): void {
    // this.className = this.className === 'red' ? '' : 'red';
    this.isVisible = !this.isVisible;
  }

}
