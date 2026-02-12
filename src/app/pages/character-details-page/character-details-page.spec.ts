import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsPage } from './character-details-page';

describe('CharacterDetailsPage', () => {
  let component: CharacterDetailsPage;
  let fixture: ComponentFixture<CharacterDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
