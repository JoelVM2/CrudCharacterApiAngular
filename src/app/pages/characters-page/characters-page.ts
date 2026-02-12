import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header-component/header-component";
import { CharactersComponent } from "../../components/characters-component/characters-component";

@Component({
  selector: 'app-characters-page',
  imports: [HeaderComponent, CharactersComponent],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage {

}
