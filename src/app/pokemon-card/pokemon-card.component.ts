import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input() pokemon: [];

  @Input() pokemonId: number;
  @Input() pokemonName: string;

  getPokemonImage() {
    const idPokemon: string = this.pokemonId.toString().padStart(3, '0');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idPokemon}.png`;
  }
}
