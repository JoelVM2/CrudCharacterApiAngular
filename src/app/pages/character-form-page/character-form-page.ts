import { Component } from '@angular/core';
import { CharactersFormComponent } from "../../components/characters-form-component/characters-form-component";
import { HeaderComponent } from "../../components/header-component/header-component";

@Component({
  selector: 'app-character-form-page',
  imports: [CharactersFormComponent, HeaderComponent],
  templateUrl: './character-form-page.html',
  styleUrl: './character-form-page.css',
})
export class CharacterFormPage {

}
