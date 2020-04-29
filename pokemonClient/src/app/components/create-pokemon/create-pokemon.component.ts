import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {PokemonService} from '../../services/pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  image: File;
  imagePreview: string | ArrayBuffer = '';
  constructor(    private dataService: PokemonService,
                  private router: Router) { }

  ngOnInit() {
  }
  newPokemon(PokemonForm: Pokemon) {
    console.log(PokemonForm);
    return this.dataService.createPokemon(PokemonForm, this.image).subscribe((newPokemon: any) => {
      console.log(newPokemon);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      alert(error.error.msg);
    });
  }
  cancel() {
    this.router.navigate(['/']);
  }
  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }
}
