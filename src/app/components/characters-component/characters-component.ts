import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters-component',
  imports: [RouterLink,FormsModule],
  templateUrl: './characters-component.html',
  styleUrl: './characters-component.css',
})

/**
 * Componente que muestra la lista de personajes.
 * Permite editar y eliminar personajes.
 */
export class CharactersComponent {
  constructor(public characterService: CharacterService, private cdr: ChangeDetectorRef) {}
  selectedCharacter: any = null;
  isModalOpen = false;
  isDeleteModalOpen = false;

  /**
   * Inicializa el componente y carga la lista de personajes.
   * @returns void
   */
  ngOnInit(): void {
    this.getCharacters();
  }

  /**
   * Obtiene todos los personajes desde el servicio.
   * @returns void
   */
  getCharacters(){
  this.characterService.getCharacters().subscribe({
        next: (response: any) => {
          this.characterService.characters = response;
          this.cdr.detectChanges();
        },
        error: (e) => {
          console.log('Error obteniendo los personajes', e);
        }
    }); 
  }

  openDeleteModal() {
  this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  /**
   * Elimina el personaje seleccionado.
   * @returns void
   */
  confirmDelete() {
    this.characterService.deleteCharacter(this.selectedCharacter.id)
      .subscribe(() => {
        window.location.href = '/characters';
      });
  }

  openEditModal(character: any) {
    this.selectedCharacter = { ...character };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  /**
   * Actualiza el personaje en el backend.
   * @returns void
   */
  updateCharacter() {
    this.characterService.putCharacter(
      this.selectedCharacter.id,
      this.selectedCharacter
    ).subscribe(() => {
      this.getCharacters();
      this.closeModal();
    });
  }

}
