import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http:HttpClient) { }

  //getOddEpisodes(): Observable <Episode[]> {
    //return this.http.get<Episode[]>(this.apiUrl);}

    getEpisodesImpar(): Observable<Episode[]> {
      return this.http.get<{ results: Episode[] }>(this.apiUrl).pipe(
        map(response => response.results.filter(episode => episode.id % 2 !== 0))
      );
    }
}
