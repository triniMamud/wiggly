import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMascotasCardComponent } from './mis-mascotas-card.component';

describe('MisMascotasCardComponent', () => {
  let component: MisMascotasCardComponent;
  let fixture: ComponentFixture<MisMascotasCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisMascotasCardComponent]
    });
    fixture = TestBed.createComponent(MisMascotasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
