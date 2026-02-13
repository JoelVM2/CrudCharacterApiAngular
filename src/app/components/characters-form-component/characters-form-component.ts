import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './characters-form-component.html',
  styleUrl: './characters-form-component.css',
})
export class CharactersFormComponent {
characterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService,
    private router: Router
  ) {
    this.characterForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      species: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.characterForm.valid) {
      this.characterService.postCharacter(this.characterForm.value)
        .subscribe(() => {
          this.router.navigate(['/characters']);
        });
    }
  }
}
