import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteStudentPageRoutingModule } from './note-student-routing.module';

import { NoteStudentPage } from './note-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteStudentPageRoutingModule
  ],
  declarations: [NoteStudentPage]
})
export class NoteStudentPageModule {}
