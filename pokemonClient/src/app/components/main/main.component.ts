import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {PokemonService} from '../../services/pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pokemon: Pokemon[] = [{
    image: '',
    type: '',
    name: '',
    attack: null,
    defence: null,
    HP: null,
    stage: ''
  }];
  more: any;
  currentItems = 12;
  showItems = true;
  constructor(
    private dataService: PokemonService,
    private router: Router
  ) {  }
  ngOnInit() {
    this.pokemons();
  }
  pokemons() {
    this.dataService.pokemons().subscribe((res: Pokemon[]) => {
      this.pokemon = res;
      console.log(this.pokemon);
    });
  }
  showMore(bla) {
    this.more = bla;
    console.log(this.more);
  }
  ShowMoreItems() {
    this.currentItems = this.currentItems + 12;
    if (this.pokemon.length <= this.currentItems) {
      this.showItems = false;
    }
  }
  findPokemons(type) {
    console.log(Object.values(type));
    return this.dataService.findPokemons(Object.values(type)).subscribe((res: any) => {
      console.log(res.msg);
      if (res.msg.length > 0) {
        localStorage.setItem('foundPokemons', JSON.stringify(res.msg));
        this.router.navigate(['/foundPokemons']);
      } else {alert('No Pokemons on your request!');
      }
      console.log(res);
      // console.log(this.task);
    });
  }
  createPokemon() {
    this.router.navigate(['/createPokemon']);
  }
}
