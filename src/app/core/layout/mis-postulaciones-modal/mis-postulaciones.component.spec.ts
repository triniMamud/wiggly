import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPostulacionesComponent } from './mis-postulaciones.component';

describe('MisPostulacionesComponent', () => {
  let component: MisPostulacionesComponent;
  let fixture: ComponentFixture<MisPostulacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisPostulacionesComponent]
    });
    fixture = TestBed.createComponent(MisPostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
