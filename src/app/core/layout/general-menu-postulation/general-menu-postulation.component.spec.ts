import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMenuPostulationComponent } from './general-menu-postulation.component';

describe('GeneralMenuPostulationComponent', () => {
  let component: GeneralMenuPostulationComponent;
  let fixture: ComponentFixture<GeneralMenuPostulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralMenuPostulationComponent]
    });
    fixture = TestBed.createComponent(GeneralMenuPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
