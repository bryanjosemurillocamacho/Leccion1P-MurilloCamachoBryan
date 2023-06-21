import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDonacionesComponent } from './lista-donaciones.component';

describe('ListaDonacionesComponent', () => {
  let component: ListaDonacionesComponent;
  let fixture: ComponentFixture<ListaDonacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDonacionesComponent]
    });
    fixture = TestBed.createComponent(ListaDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
