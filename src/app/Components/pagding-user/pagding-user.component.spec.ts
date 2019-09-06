import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagdingUserComponent } from './pagding-user.component';

describe('PagdingUserComponent', () => {
  let component: PagdingUserComponent;
  let fixture: ComponentFixture<PagdingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagdingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagdingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
