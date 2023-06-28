import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteStudentPage } from './note-student.page';

describe('NoteStudentPage', () => {
  let component: NoteStudentPage;
  let fixture: ComponentFixture<NoteStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoteStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
