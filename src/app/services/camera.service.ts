import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  constructor(private storage: AngularFireStorage,
    private afDB: AngularFireDatabase
   ) {}

  //el arreglo que tendra las fotos tomadas
  public photos: UserPhoto[] = [];

  public async addNewToGallery(event: any) {
    // Tomar la foto

    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    //para guardar la foto en el arreglo
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath,
    });

    
   
    //Para guardar en storage
    const fileName = new Date().getTime() + '.jpg';

    const path = 'Notes/' + fileName;
    const blob = await this.makeBlob(capturedPhoto.webPath+ ''); // Convertir la imagen en un Blob

    this.storage.upload(path, blob);

    const data = {
      photoURL: capturedPhoto.webPath,
    
    };

    //Para guardar la url con la imagen
    this.afDB.list('notes').push(data);
    
    
  }

  //hace una peticion y devuelve el string de la foto para poder almacenarla
  private async makeBlob(capturedPhotoWebPath: string): Promise<Blob> {
    const response = await fetch(capturedPhotoWebPath);
    const blob = await response.blob();
    return blob;
  }
}

//Para mostrar la foto
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
