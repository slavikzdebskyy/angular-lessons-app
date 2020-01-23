import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public students: Student[];
  public selectedStudent: Student;

  constructor() {
    this.students = [
      {
        id: 1,
        name: 'Vasul',
        lastName: 'Petrenko',
        age: 29
      },
      {
        id: 2,
        name: 'Petro',
        lastName: 'Stepanenko',
        age: 31
      },
      {
        id: 3,
        name: 'Ivan',
        lastName: 'Ivanenko',
        age: 35
      },
      {
        id: 4,
        name: 'Anna',
        lastName: 'Isaenko',
        age: 22
      }
    ];

    this.selectedStudent = null;
   }

  ngOnInit() {
  }

  public setSelectedStudent(id: string | number): void {
    const student: Student = this.students.find((item: Student) => item.id === id);

    this.selectedStudent = student || null;
  }

  public getFullName(student: Student): string {
    return `${student.name} ${student.lastName} ${student.age}`;
  }

}
