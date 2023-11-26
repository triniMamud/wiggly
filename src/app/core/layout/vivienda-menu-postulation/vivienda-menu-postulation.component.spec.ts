import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaMenuPostulationComponent } from './vivienda-menu-postulation.component';

describe('ViviendaMenuPostulationComponent', () => {
  let component: ViviendaMenuPostulationComponent;
  let fixture: ComponentFixture<ViviendaMenuPostulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViviendaMenuPostulationComponent]
    });
    fixture = TestBed.createComponent(ViviendaMenuPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
