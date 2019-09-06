import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagdingComponent } from './custom-pagding.component';

describe('CustomPagdingComponent', () => {
  let component: CustomPagdingComponent;
  let fixture: ComponentFixture<CustomPagdingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagdingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
