import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EugeneLambovComponent } from './eugene-lambov.component';

describe('EugeneLambovComponent', () => {
  let component: EugeneLambovComponent;
  let fixture: ComponentFixture<EugeneLambovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EugeneLambovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EugeneLambovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
