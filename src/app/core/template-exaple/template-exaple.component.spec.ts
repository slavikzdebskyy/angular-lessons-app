import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExapleComponent } from './template-exaple.component';

describe('TemplateExapleComponent', () => {
  let component: TemplateExapleComponent;
  let fixture: ComponentFixture<TemplateExapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateExapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
