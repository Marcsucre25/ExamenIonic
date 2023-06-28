import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteStudentPage } from './note-student.page';

const routes: Routes = [
  {
    path: '',
    component: NoteStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteStudentPageRoutingModule {}
