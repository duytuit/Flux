import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagdingComponent } from './pagding.component';

describe('PagdingComponent', () => {
  let component: PagdingComponent;
  let fixture: ComponentFixture<PagdingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagdingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
