import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFormPage } from './character-form-page';

describe('CharacterFormPage', () => {
  let component: CharacterFormPage;
  let fixture: ComponentFixture<CharacterFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
