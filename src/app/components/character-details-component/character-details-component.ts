import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../services/character-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-details-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './character-details-component.html',
  styleUrl: './character-details-component.css',
})
export class CharacterDetailsComponent {
  userId!: number;
  selectedCharacter: any;
  private subscription?: Subscription;
  isModalOpen = false;
  isDeleteModalOpen = false;

  constructor(
    public characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.getUser(this.userId);
    });
  }

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

  confirmDelete() {
    this.characterService.deleteCharacter(this.selectedCharacter.id)
      .subscribe(() => {
        window.location.href = '/characters';
      });
  }



  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  openEditModal() {
  this.selectedCharacter = { ...this.selectedCharacter };
  this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  updateCharacter() {
    this.characterService.putCharacter(
      this.selectedCharacter.id,
      this.selectedCharacter
    ).subscribe(() => {
      this.isModalOpen = false;
      this.cdr.detectChanges();
    });
  }


}
