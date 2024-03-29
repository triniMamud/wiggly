import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPostulacionesCardComponent } from './mis-postulaciones-card.component';

describe('MisPostulacionesCardComponent', () => {
  let component: MisPostulacionesCardComponent;
  let fixture: ComponentFixture<MisPostulacionesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisPostulacionesCardComponent]
    });
    fixture = TestBed.createComponent(MisPostulacionesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
