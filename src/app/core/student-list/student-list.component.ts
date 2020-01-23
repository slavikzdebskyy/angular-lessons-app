import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './../../interfaces/student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input()
  public students: Student[];

  @Output()
  private selectedStudent: EventEmitter<string | number>;

  constructor() {
    this.students = [];
    this.selectedStudent = new EventEmitter();
  }

  ngOnInit() {
  }

  public getFullName(student: Student): string {
    return `${student.name} ${student.lastName} ${student.age}`;
  }

  public selectStutent(id: string | number): void {
    this.selectedStudent.emit(id);
  }

}
