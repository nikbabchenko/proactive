import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityItemComponent } from './charity-item.component';

describe('CharityItemComponent', () => {
  let component: CharityItemComponent;
  let fixture: ComponentFixture<CharityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
