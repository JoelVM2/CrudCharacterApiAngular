import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-details-component',
  imports: [],
  templateUrl: './character-details-component.html',
  styleUrl: './character-details-component.css',
})
export class CharacterDetailsComponent {
userId!: number;
  selectedCharacter: any;
  private subscription?: Subscription;

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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
