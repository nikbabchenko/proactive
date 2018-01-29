import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrashenieComponent } from './obrashenie.component';

describe('ObrashenieComponent', () => {
  let component: ObrashenieComponent;
  let fixture: ComponentFixture<ObrashenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrashenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrashenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
