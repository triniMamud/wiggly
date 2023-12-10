import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionesPostulacionesComponent } from './adopciones-postulaciones.component';

describe('AdopcionesPostulacionesComponent', () => {
  let component: AdopcionesPostulacionesComponent;
  let fixture: ComponentFixture<AdopcionesPostulacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopcionesPostulacionesComponent]
    });
    fixture = TestBed.createComponent(AdopcionesPostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
