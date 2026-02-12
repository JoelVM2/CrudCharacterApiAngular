import { Component } from '@angular/core';
import { CharacterDetailsComponent } from "../../components/character-details-component/character-details-component";
import { HeaderComponent } from "../../components/header-component/header-component";

@Component({
  selector: 'app-character-details-page',
  imports: [CharacterDetailsComponent, HeaderComponent],
  templateUrl: './character-details-page.html',
  styleUrl: './character-details-page.css',
})
export class CharacterDetailsPage {

}
