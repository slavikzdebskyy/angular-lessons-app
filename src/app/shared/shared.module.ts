import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBtnComponent } from './login-btn/login-btn.component';



@NgModule({
  declarations: [LoginBtnComponent],
  exports: [LoginBtnComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
