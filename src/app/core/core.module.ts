import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { StudentListComponent } from './student-list/student-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';


const COMPONENTS: any = [
  HeaderComponent,
  StudentListComponent,
  WrapperComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatChipsModule,
  ],
  exports: [...COMPONENTS]
})
export class CoreModule { }
