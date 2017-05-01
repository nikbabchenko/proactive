import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityListComponent } from './charity-list.component';

describe('CharityListComponent', () => {
  let component: CharityListComponent;
  let fixture: ComponentFixture<CharityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
