import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CharactersPage } from './pages/characters-page/characters-page';
import { CharacterDetailsPage } from './pages/character-details-page/character-details-page';
import { CharacterFormPage } from './pages/character-form-page/character-form-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'characters', component: CharactersPage },
  { path: 'characters/:id', component: CharacterDetailsPage },
  { path: 'form', component: CharacterFormPage },
];