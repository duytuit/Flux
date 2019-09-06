import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernhomComponent } from './usernhom.component';

describe('UsernhomComponent', () => {
  let component: UsernhomComponent;
  let fixture: ComponentFixture<UsernhomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernhomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
