import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZvernennjaDoOrganivComponent } from './zvernennja-do-organiv.component';

describe('ZvernennjaDoOrganivComponent', () => {
  let component: ZvernennjaDoOrganivComponent;
  let fixture: ComponentFixture<ZvernennjaDoOrganivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZvernennjaDoOrganivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZvernennjaDoOrganivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
