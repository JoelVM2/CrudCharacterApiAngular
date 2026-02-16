import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character-service';
import { FormGroup,FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters-component',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './characters-component.html',
  styleUrl: './characters-component.css',
})

/**
 * Componente que muestra la lista de personajes.
 * Permite editar y eliminar personajes.
 */
export class CharactersComponent {
  editForm!: FormGroup;

  selectedCharacter: any = null;
  isModalOpen = false;
  isDeleteModalOpen = false;
  constructor(public characterService: CharacterService, private cdr: ChangeDetectorRef, private fb: FormBuilder) { }

  /**
   * Inicializa el componente y carga la lista de personajes.
   * @returns void
   */
  ngOnInit(): void {
    this.getCharacters();

    this.editForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      gender: ['', Validators.required],
      species: ['', Validators.required],
      image: ['', Validators.required]
    });
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
  this.selectedCharacter = character;

  this.editForm.patchValue({
    name: character.name,
    status: character.status,
    gender: character.gender,
    species: character.species,
    image: character.image
  });

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
  if (this.editForm.valid) {
    const updatedCharacter = {
      ...this.selectedCharacter,
      ...this.editForm.value
    };

    this.characterService.putCharacter(
      this.selectedCharacter.id,
      updatedCharacter
    ).subscribe(() => {
      this.getCharacters();
      this.closeModal();
    });
  }
}


}
