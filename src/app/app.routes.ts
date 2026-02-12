import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CharactersPage } from './pages/characters-page/characters-page';
import { CharacterDetailsPage } from './pages/character-details-page/character-details-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'characters', component: CharactersPage },
  { path: 'characters/:id', component: CharacterDetailsPage },
];