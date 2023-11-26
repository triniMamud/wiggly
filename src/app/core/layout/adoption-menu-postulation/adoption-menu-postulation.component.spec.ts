import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionMenuPostulationComponent } from './adoption-menu-postulation.component';

describe('AdoptionMenuPostulationComponent', () => {
  let component: AdoptionMenuPostulationComponent;
  let fixture: ComponentFixture<AdoptionMenuPostulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptionMenuPostulationComponent]
    });
    fixture = TestBed.createComponent(AdoptionMenuPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
