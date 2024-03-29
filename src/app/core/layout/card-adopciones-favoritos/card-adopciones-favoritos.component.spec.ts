import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdopcionesFavoritosComponent } from './card-adopciones-favoritos.component';

describe('CardAdopcionesFavoritosComponent', () => {
  let component: CardAdopcionesFavoritosComponent;
  let fixture: ComponentFixture<CardAdopcionesFavoritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAdopcionesFavoritosComponent]
    });
    fixture = TestBed.createComponent(CardAdopcionesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
