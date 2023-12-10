import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionesFavoritosComponent } from './adopciones-favoritos.component';

describe('AdopcionesFavoritosComponent', () => {
  let component: AdopcionesFavoritosComponent;
  let fixture: ComponentFixture<AdopcionesFavoritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopcionesFavoritosComponent]
    });
    fixture = TestBed.createComponent(AdopcionesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
