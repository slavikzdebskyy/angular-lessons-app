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
        age: 29,
        adress: {
          country: 'Ukraine',
          city: 'Lviv',
          street: 'Naukova',
          home: '2a'
        }
      },
      {
        id: 2,
        name: 'Petro',
        lastName: 'Stepanenko',
        age: 31,
        adress: {
          country: 'Ukraine',
          city: 'Kharkiv',
          street: 'Lenina',
          home: '22b'
        }
      },
      {
        id: 3,
        name: 'Ivan',
        lastName: 'Ivanenko',
        age: 35,
        adress: {
          country: 'Poland',
          city: 'Warshaw',
          street: 'Naukova',
          home: '123'
        }
      },
      {
        id: 4,
        name: 'Anna',
        lastName: 'Isaenko',
        age: 22,
        adress: {
          country: 'Germany',
          city: 'Berlin',
        }
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
