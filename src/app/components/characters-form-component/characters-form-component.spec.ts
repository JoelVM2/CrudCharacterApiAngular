import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFormComponent } from './characters-form-component';

describe('CharactersFormComponent', () => {
  let component: CharactersFormComponent;
  let fixture: ComponentFixture<CharactersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
