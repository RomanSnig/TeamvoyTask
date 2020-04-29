import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-filtered-pokemons',
  templateUrl: './filtered-pokemons.component.html',
  styleUrls: ['./filtered-pokemons.component.css']
})
export class FilteredPokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [{
    defence: null,
    attack: null,
    name: '',
    image: '',
    type: '',
    stage: '',
    HP: null
  }];
  more: any;
  constructor(private http: HttpClient,
              private dataService: PokemonService,
              private router: Router) { }

  ngOnInit() {
    const getPokemons = localStorage.getItem('foundPokemons');
    this.pokemons = JSON.parse(getPokemons);
    console.log(this.pokemons);
  }
  findPokemons(type) {
    console.log(Object.values(type));
    return this.dataService.findPokemons(Object.values(type)).subscribe((res: any) => {
      console.log(res);
      if (res.msg.length > 0) {
        localStorage.setItem('foundPokemons', JSON.stringify(res.msg));
        this.pokemons = res.msg;
      } else {alert('No pokemons on your request!');
      }
    });
  }
  showMore(bla) {
    this.more = bla;
    console.log(this.more);
  }
  toAllPokemons() {
    localStorage.removeItem('foundPokemons');
    this.router.navigate(['/']);
  }
}
