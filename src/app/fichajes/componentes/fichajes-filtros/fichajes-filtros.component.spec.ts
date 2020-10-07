import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajesFiltrosComponent } from './fichajes-filtros.component';

describe('FichajesFiltrosComponent', () => {
  let component: FichajesFiltrosComponent;
  let fixture: ComponentFixture<FichajesFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichajesFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichajesFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
