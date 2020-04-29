import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../models/pokemon';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  pokemons() {
    return this.http.get('http://localhost:3000/api/pokemon/all');
  }
  findPokemons(type) {
    return this.http.get('http://localhost:3000/api/pokemon/getByType/' + type);
  }
  createPokemon(p: Pokemon, image): Observable<Pokemon> {
    const fd = new FormData();
    Object.keys(p).forEach(key => {
      fd.append(key, p[key]);
    });
    if (image) {
      fd.append('image', image, image.name);
    }
    return this.http.post<Pokemon>('http://localhost:3000/api/pokemon/create', fd);
  }
}
