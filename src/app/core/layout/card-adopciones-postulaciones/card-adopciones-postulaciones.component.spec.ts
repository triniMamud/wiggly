import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdopcionesPostulacionesComponent } from './card-adopciones-postulaciones.component';

describe('CardAdopcionesPostulacionesComponent', () => {
  let component: CardAdopcionesPostulacionesComponent;
  let fixture: ComponentFixture<CardAdopcionesPostulacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAdopcionesPostulacionesComponent]
    });
    fixture = TestBed.createComponent(CardAdopcionesPostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
