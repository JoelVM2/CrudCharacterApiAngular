import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-characters-component',
  imports: [RouterLink],
  templateUrl: './characters-component.html',
  styleUrl: './characters-component.css',
})
export class CharactersComponent {
constructor(public characterService: CharacterService, private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
  this.getCharacters();
}

getCharacters(){
this.characterService.getCharacters().subscribe({
      next: (response: any) => {
        this.characterService.characters = response;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.log('Error obteniendo los personajes', e);
      }
    });}

}
