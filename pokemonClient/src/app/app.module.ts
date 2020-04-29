import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { FilteredPokemonsComponent } from './components/filtered-pokemons/filtered-pokemons.component';
import {RouterModule, Routes} from '@angular/router';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'foundPokemons', component: FilteredPokemonsComponent},
  {path: 'createPokemon', component: CreatePokemonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilteredPokemonsComponent,
    CreatePokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
