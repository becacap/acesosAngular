import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaTableComponent } from './jornada-table.component';

describe('JornadaTableComponent', () => {
  let component: JornadaTableComponent;
  let fixture: ComponentFixture<JornadaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
