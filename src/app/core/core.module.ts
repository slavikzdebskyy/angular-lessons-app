import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { StudentListComponent } from './student-list/student-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { ContainerComponent } from './container/container.component';
import { TemplateExapleComponent } from './template-exaple/template-exaple.component';


const COMPONENTS: any = [
  HeaderComponent,
  StudentListComponent,
  WrapperComponent,
  ContainerComponent,
  TemplateExapleComponent
];

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatChipsModule,
  ],
  exports: [...COMPONENTS]
})
export class CoreModule { }
