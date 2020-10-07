import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajesRegistrosComponent } from './fichajes-registros.component';

describe('FichajesRegistrosComponent', () => {
  let component: FichajesRegistrosComponent;
  let fixture: ComponentFixture<FichajesRegistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichajesRegistrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichajesRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
