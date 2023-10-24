import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPetModalComponent } from './full-pet-modal.component';

describe('FullPetModalComponent', () => {
  let component: FullPetModalComponent;
  let fixture: ComponentFixture<FullPetModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullPetModalComponent]
    });
    fixture = TestBed.createComponent(FullPetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
