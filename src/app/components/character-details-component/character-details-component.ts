import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../services/character-service';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-details-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './character-details-component.html',
  styleUrl: './character-details-component.css',
})

/**
 * Componente que muestra el detalle de un personaje.
 * Permite editar y eliminar el personaje seleccionado.
 */
export class CharacterDetailsComponent {
  userId!: number;
  selectedCharacter: any;
  private subscription?: Subscription;

  isModalOpen = false;
  isDeleteModalOpen = false;

  editForm!: FormGroup;

  constructor(public characterService: CharacterService, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef,private fb: FormBuilder) {}

 /**
   * Inicializa el componente.
   * Obtiene el ID desde la ruta y carga el personaje correspondiente.
   * @returns void
   */
  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.getUser(this.userId);

      this.editForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      status: ['', Validators.required],
      gender: ['', Validators.required],
      image: ['', Validators.required]
});

    });
  }

   /**
   * Obtiene un personaje por su ID.
   * @param {number} id - ID del personaje a buscar.
   * @returns void
   */
  getUser(id: number) {
    this.characterService.getCharacterById(id).subscribe({
      next: (response: any) => {
        this.selectedCharacter = response;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.error('Error obteniendo personaje', e);
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

  /**
   * Se ejecuta al destruir el componente.
   * Libera la suscripción activa.
   * @returns void
   */
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
  openEditModal() {
  this.editForm.patchValue({
    name: this.selectedCharacter.name,
    species: this.selectedCharacter.species,
    status: this.selectedCharacter.status,
    gender: this.selectedCharacter.gender,
    image: this.selectedCharacter.image
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

      this.selectedCharacter = updatedCharacter;

      this.isModalOpen = false;
      this.cdr.detectChanges();
    });
  }
}



}
