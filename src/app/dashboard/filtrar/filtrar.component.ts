import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Foto } from '../models/photos';


@Component({
  selector: 'app-filtrar',
  standalone: true,
  imports: [],
  templateUrl: './filtrar.component.html',
  styleUrl: './filtrar.component.css'
})
export class FiltrarComponent implements OnInit {

  fotos: Foto[] = [];

  constructor(private photosService: PhotosService){}

  ngOnInit(): void {
      this.photosService.getFotosFilter().subscribe(data =>{
        this.fotos = data;
      })
  }

}
