import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getEpisodesImpar().subscribe(data => {
      this.episodes = data;
    });
  }


}
