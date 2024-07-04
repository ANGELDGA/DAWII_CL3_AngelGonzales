import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Foto } from '../models/photos';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http:HttpClient) { }

  
  getFotosFilter(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.apiUrl).pipe(
      map(photos => photos.filter(photo => 
        photo.title.startsWith('a') || 
        photo.title.startsWith('r') || 
        photo.title.startsWith('s')
      ))
    );
  }

}
