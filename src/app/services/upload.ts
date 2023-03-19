
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor(private http: HttpClient) { }

  subirArchivo(archivo: File) {
    const formData = new FormData();
    formData.append('archivo', archivo, archivo.name);

    return this.http.post('/api/archivo', formData);
  }

}


