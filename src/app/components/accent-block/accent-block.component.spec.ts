import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentBlockComponent } from './accent-block.component';

describe('AccentBlockComponent', () => {
  let component: AccentBlockComponent;
  let fixture: ComponentFixture<AccentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
