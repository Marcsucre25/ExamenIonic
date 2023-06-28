import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import {  CameraService} from "../services/camera.service";


@Component({
  selector: 'app-note-student',
  templateUrl: './note-student.page.html',
  styleUrls: ['./note-student.page.scss'],
})
export class NoteStudentPage implements OnInit {
  studentId = '';
  studentName = '';

  constructor(private afDB: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private router: Router,
    public cameraService: CameraService) {}

  

  //Camara
  addPhotoToGallery() {
    
    this.cameraService.addNewToGallery(event);

  }
 


  registerStudent() {
    const studentData = {
      NoteId: this.studentId,
      TextNote: this.studentName,
    };



    // Guardar los datos del estudiante en Firebase
    this.afDB.list('notes').push(studentData)
      .then(() => {
        // Registro exitoso
        window.alert('Registro exitoso');
        this.studentId = '';
        this.studentName = '';
      })
      .catch((error) => {
        console.log(error);
        window.alert('Registro fallido');
      });

    
  }
  

  //para cerrar sesion
  logout() {
    this.afAuth.signOut()
    .then(() => {
      this.router.navigate(['/login']);
      window.alert('HAS CERRADO SESION');
    })
    .catch((error) => {
      window.alert('Error al cerrar sesion');
      console.log(error);
    });
  }


  ngOnInit() {}
}
