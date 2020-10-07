import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajesContainerComponent } from './fichajes-container.component';

describe('FichajesContainerComponent', () => {
  let component: FichajesContainerComponent;
  let fixture: ComponentFixture<FichajesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichajesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichajesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
